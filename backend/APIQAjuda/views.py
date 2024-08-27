from rest_framework import mixins, viewsets, status, filters, parsers
from rest_framework.response import Response
from rest_framework.decorators import action
import datetime
from django_filters.rest_framework import DjangoFilterBackend

from drf_spectacular.utils import extend_schema

from .models import *
from .serializers import *
from .permissions import *


class AcaoViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all()
    search_fields = ['nome', 'descricao']
    permission_classes = [ReadOnlyOrIsAuthenticated]
    filter_backends = (filters.SearchFilter, DjangoFilterBackend)
    filterset_fields = ['inicio', 'fim', 'categoria', 'criado_por']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return ListAcaoSerializer
        else:
            return AcaoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = ListAcaoSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)

    def perform_create(self, serializer):
        colaborador = Colaborador.objects.get(
            id=self.request.user.id)  # type: ignore
        serializer.save(criado_por=colaborador)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(request=None)
    @action(detail=True, methods=['post'])
    def solicitacao(self, request, *args, **kwargs):
        acao = self.get_object()
        colaborador = Colaborador.objects.get(id=request.user.id)
        status_espera = Status.EM_ESPERA
        serializer_class = None

        if SolicitacaoVoluntariado.objects.filter(acao=acao, colaborador=colaborador).exists():
            return Response({"message": "Você já solicitou participação nesta ação."}, status=status.HTTP_400_BAD_REQUEST)

        solicitacao = SolicitacaoVoluntariado.objects.create(
            acao=acao,
            colaborador=colaborador,
            status=status_espera,
        )

        return Response({"message": "Solicitação de participação enviada com sucesso."}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['get'])
    def solicitacoes(self, request, pk=None):
        acao = self.get_object()
        if acao.criado_por != request.user:
            return Response({'error': 'Você não tem permissão para ver as solicitações desta ação.'}, status=status.HTTP_403_FORBIDDEN)

        solicitacoes = SolicitacaoVoluntariado.objects.filter(acao=acao)
        serializer = SolicitacaoVoluntariadoSerializer(solicitacoes, many=True)
        return Response(serializer.data)


class ColaboradorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Colaborador.objects.all()
    serializer_class = ColaboradorSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Você não tem permissão para acessar esta lista.'}, status=status.HTTP_403_FORBIDDEN)

        queryset = self.get_queryset()
        serializer = ColaboradorSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def logado(self, request, *args, **kwargs):
        serializer = ColaboradorSerializer(
            request.user, context={'request': request})
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def acoes(self, request, *args, **kwargs):
        colaborador = request.user
        acoes = colaborador.acoes.all()
        serializer = ListAcaoSerializer(acoes, many=True)
        return Response(serializer.data)


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class FotoViewSet(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    queryset = Foto.objects.all()
    serializer_class = ListFotoSerializer
    permission_classes = [ReadOnlyOrIsAuthenticated]
    parser_classes = [parsers.MultiPartParser]

    def create(self, request, format=None):
        serializer = FotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, format=None):
        images = Foto.objects.all()
        serializer = ListFotoSerializer(images, many=True)
        return Response(serializer.data)


class SolicitacaoVoluntariadoViewSet(viewsets.ModelViewSet):
    queryset = SolicitacaoVoluntariado.objects.all()
    serializer_class = SolicitacaoVoluntariadoSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def aceitar(self, request, pk=None):
        solicitacao = self.get_object()
        acao = solicitacao.acao

        if acao.criado_por != request.user:
            return Response({'error': 'Você não tem permissão para aceitar esta solicitação.'}, status=status.HTTP_403_FORBIDDEN)

        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.ACEITO
            solicitacao.modificado_em = datetime.datetime.now()

            solicitacao.colaborador.acoes.add(acao)

            acao.qtd_voluntarios += 1

            solicitacao.colaborador.save()
            acao.save()
            solicitacao.save()

            return Response({'status': 'Solicitação aceita e ação adicionada ao colaborador.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def recusar(self, request, pk=None):
        solicitacao = self.get_object()
        acao = solicitacao.acao

        if acao.criado_por != request.user:
            return Response({'error': 'Você não tem permissão para recusar esta solicitação.'}, status=status.HTTP_403_FORBIDDEN)

        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.REJEITADO
            solicitacao.modificado_em = datetime.datetime.now()
            solicitacao.save()
            return Response({'status': 'Solicitação recusada'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'}, status=status.HTTP_400_BAD_REQUEST)
