from rest_framework import viewsets, status, generics
from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import F, ExpressionWrapper, BooleanField

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

    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH' or self.request.method == 'PUT':
            return AcaoBancoSerializer
        else:
            return AcaoSerializer

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

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer