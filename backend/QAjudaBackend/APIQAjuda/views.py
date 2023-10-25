from rest_framework import viewsets, status
from .models import Colaborador_acao, Acao
from .serializers import SolicitacaoSerializer, AcaoSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class AcaoViewSet(viewsets.ModelViewSet):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer

class SolicitacaoViewSet(viewsets.ModelViewSet):
    queryset = Solicitacao.objects.all()
    serializer_class = SolicitacaoSerializer

    @action(detail=True, methods=['POST'])
    def aceitar_solicitacao(self, request, pk=None):
        solicitacao = self.get_object()
        
        # Verifique se o colaborador atual é o responsavel da ação
        if not request.user == solicitacao.acao.criador.user:
            return Response({'error': 'Você não tem permissão para aceitar esta solicitação.'}, status=status.HTTP_403_FORBIDDEN)

        # Verifique se a solicitação já não foi aceita ou recusada
        if solicitacao.status in [Solicitacao.Status.ACEITO, Solicitacao.Status.REJEITADO]:
            return Response({'error': 'Esta solicitação já foi processada.'}, status=status.HTTP_400_BAD_REQUEST)

        # Prossiga com a operação de aceitar
        solicitacao.status = Solicitacao.Status.ACEITO
        solicitacao.save()
        return Response({'status': 'Solicitação aceita'})

    @action(detail=True, methods=['POST'])
    def recusar_solicitacao(self, request, pk=None):
        solicitacao = self.get_object()
        
        # Verifique se o colaborador atual é o responsavel da ação
        if not request.user == solicitacao.acao.criador.user:
            return Response({'error': 'Você não tem permissão para recusar esta solicitação.'}, status=status.HTTP_403_FORBIDDEN)

        # Verifique se a solicitação já não foi aceita ou recusada
        if solicitacao.status in [Solicitacao.Status.ACEITO, Solicitacao.Status.REJEITADO]:
            return Response({'error': 'Esta solicitação já foi processada.'}, status=status.HTTP_400_BAD_REQUEST)

        # Prossiga com a operação de recusar
        solicitacao.status = Solicitacao.Status.REJEITADO
        solicitacao.save()
        return Response({'status': 'Solicitação recusada'})