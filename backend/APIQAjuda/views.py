from rest_framework import viewsets, status, generics, views, filters
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import action
from .models import *
from .serializers import *
import datetime


class SolicitacoesEmEsperaView(generics.ListAPIView):
    serializer_class = SolicitacaoVoluntariadoSerializer

    def get_queryset(self):
        acao_id = self.kwargs['acao_id']
        return SolicitacaoVoluntariado.objects.filter(acao_id=acao_id, solicitacao='E').select_related('colaborador')


class AceitarRecusarSolicitacaoView(viewsets.ModelViewSet):
    queryset = SolicitacaoVoluntariado.objects.all()
    serializer_class = SolicitacaoVoluntariadoSerializer

    @action(detail=True, methods=['post'])
    def aceitar(self, request, pk=None):
        solicitacao = self.get_object()
        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.ACEITO
            solicitacao.modificado_em =datetime.datetime.now()
            solicitacao.save()
            return Response({'status': 'Solicitação aceita'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'})

    @action(detail=True, methods=['post'])
    def recusar(self, request, pk=None):
        solicitacao = self.get_object()
        if solicitacao.status == Status.EM_ESPERA:
            solicitacao.status = Status.REJEITADO
            solicitacao.modificado_em =datetime.datetime.now()
            solicitacao.save()
            return Response({'status': 'Solicitação recusada'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'A solicitação já foi processada.'})
            
class AcaoViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ['nome', 'descricao']

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
        colaborador = Colaborador.objects.get(user=self.request.user)
        serializer.save(criador=colaborador)

    def create(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response("Usuário não autenticado.", status=status.HTTP_401_UNAUTHORIZED)
        return super().create(request, *args, **kwargs)
    
        


class ColaboradorViewSet(viewsets.ModelViewSet):
    queryset = Colaborador.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ColaboradorBancoSerializer
        else:
            return ColaboradorSerializer


class CardDestaqueViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all().select_related(
        'criador').select_related('categoria').select_related('foto')
    serializer_class = CardDestaqueSerializer


class SolicitacaoVoluntariadoViewSet(viewsets.ModelViewSet):
    queryset = SolicitacaoVoluntariado.objects.all().select_related(
        'acao').select_related('colaborador')
    serializer_class = SolicitacaoVoluntariadoSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH' or self.request.method == 'PUT':
            return SolicitacaoVoluntariadoBancoSerializer
        else:
            return SolicitacaoVoluntariadoSerializer


class SolicitacaoViewSet(generics.ListAPIView):
    serializer_class = SolicitacaoVoluntariadoSerializer

    def get_queryset(self):
        acao_id = self.kwargs['acao_id']
        return SolicitacaoVoluntariado.objects.filter(acao=acao_id, solicitacao='E')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class FotoViewSet(views.APIView):
    parser_classes = (MultiPartParser,)

    def get_serializer(self):
        return FotoSerializer()

    def post(self, request, format=None):
        serializer = FotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        images = Foto.objects.all()
        serializer = FotoSerializer(images, many=True)
        return Response(serializer.data)
