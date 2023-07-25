from django.http import JsonResponse
from .models import Acao, Solicitacao, Usuario



# aqui estarão as classes de negócio
def voluntariar_em_acao(self, usuario):
    solicitacao = Solicitacao(acao=self, voluntario=usuario)
    solicitacao.save()
    return solicitacao

def solicitar_participacao(request):
    if request.method == 'POST':
        acao_id = request.POST.get('acao_id')
        acao = Acao.objects.get(id=acao_id)
        usuario = request.user.usuario  # Obtenha o objeto Usuario correspondente ao usuário logado

        solicitacao = acao.voluntariar_em_acao(usuario)

        return JsonResponse({'success': True})
    
    return JsonResponse({'success': False})# aqui estarão as classes de negócio
