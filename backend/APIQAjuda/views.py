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
        colaborador = Colaborador.objects.get(id=self.request.user.id)
        serializer.save(criado_por=colaborador)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(request=None)
    @action(detail=True, methods=['post'])
    def solicitacoes(self, request, *args, **kwargs):
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


class ColaboradorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Colaborador.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ColaboradorSerializer

    @action(detail=False, methods=['get'])
    def logado(self, request, *args, **kwargs):
        serializer = ColaboradorSerializer(
            request.user, context={'request': request})
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
    serializer_class = FotoSerializer
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
        serializer = FotoSerializer(images, many=True)
        return Response(serializer.data)


class SolicitacaoVoluntariadoViewSet(viewsets.ModelViewSet):
    queryset = SolicitacaoVoluntariado.objects.all()
    serializer_class = SolicitacaoVoluntariadoSerializer

    @action(detail=True, methods=['post'])
    def aceitar(self, request, pk=None):
        solicitacao = self.get_object()
        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.ACEITO
            solicitacao.modificado_em = datetime.datetime.now()
            solicitacao.save()
            return Response({'status': 'Solicitação aceita'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'})

    @action(detail=True, methods=['post'])
    def recusar(self, request, pk=None):
        solicitacao = self.get_object()
        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.REJEITADO
            solicitacao.modificado_em = datetime.datetime.now()
            solicitacao.save()
            return Response({'status': 'Solicitação recusada'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'})
