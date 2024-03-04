from rest_framework import viewsets, status, generics, views
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import filters


class SolicitacoesEmAbertoView(generics.ListAPIView):
    serializer_class = ColaboradorAcaoSerializer

    def get_queryset(self):
        acao_id = self.kwargs['acao_id']
        return Colaborador_acao.objects.filter(acao_id=acao_id, solicitacao='E').select_related('colaborador')

    def perfom_update(self, serializer):
        instance = serializer.instance
        aceitar_solicitacao = serializer.validated_data.get('aceitar_solicitacao')
        recusar_solicitacao = serializer.validated_data.get('recusar_solicitacao')

        if aceitar_solicitacao:
            instance.solicitacao = 'A'
            instance.save()
            return Response({'status': 'Solicitação aceita'})

        if recusar_solicitacao:
            instance.solicitacao = 'R'
            instance.save()
            return Response({'status': 'Solicitação recusada'})
        
class AcaoViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ['nome', 'descricao']

    def get_serializer_class(self):
        if self.action == 'list':
            return AcaoBancoSerializer
        else:
            return AcaoSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = AcaoSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)

class ColaboradorViewSet(viewsets.ModelViewSet):
    queryset = Colaborador.objects.all()
    
    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH' or self.request.method == 'PUT':
            return ColaboradorBancoSerializer
        else:
            return ColaboradorSerializer

class CardDestaqueViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all().select_related('criador').select_related('categoria').select_related('foto')
    serializer_class = CardDestaqueSerializer
    
class ColaboradorAcaoViewSet(viewsets.ModelViewSet):
    queryset = Colaborador_acao.objects.all().select_related('acao').select_related('colaborador')
    serializer_class = ColaboradorAcaoSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH' or self.request.method == 'PUT':
            return ColaboradorAcaoBancoSerializer
        else:
            return ColaboradorAcaoSerializer
        
class SolicitacaoViewSet(generics.ListAPIView):
    serializer_class = ColaboradorAcaoSerializer

    def get_queryset(self):
        acao_id = self.kwargs['acao_id']
        return Colaborador_acao.objects.filter(acao=acao_id, solicitacao='E')

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

    