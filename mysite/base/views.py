from django.shortcuts import get_object_or_404, render
from django.views import View
from .models import Acao, Solicitacao
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse


class IndexViews(View):
    def get(self, request):
        lista_acao1 = Acao.objects.all().order_by('-criada_em')[:3]
        lista_acao2 = Acao.objects.all().order_by('criada_em')[:3]
        context = {'lista_acao1': lista_acao1, 'lista_acao2':lista_acao2}
        return render(request, 'base/index.html', context)


class BuscarAcaoViews(View):
    def post(self, request, *args, **kwargs):
        busca = request.POST['busca']
        acoes = Acao.objects.filter(nome__icontains=busca)
        context = {'acoes' : acoes, 'busca' : busca}
        return render(request, 'base/buscar_acao.html', context)


class DetalheViews(View):
    def get(self, request, *args, **kwargs):
        acao = get_object_or_404(Acao, pk=kwargs['pk'])
        #foto = acao.foto_set.first()
        context = {'acao': acao}
        return render(request, 'base/detalhe.html', context)

class VoluntariarViews(View):
    def get(self, request, *args, **kwargs):
        acao = get_object_or_404(Acao, pk=kwargs['pk'])
        context = {'acao' : acao}
        return render(request, 'base/voluntariar.html', context)

    @staticmethod
    def voluntariar_em_acao(request, acao_id):
        if request.method == 'POST':
            try:
                acao = Acao.objects.get(pk=acao_id)
            except Acao.DoesNotExist:
                return JsonResponse({'success': False, 'message': 'Ação não encontrada.'}, status=404)

            usuario = request.user.usuario  # Recupere o usuário logado do atributo "usuario" associado ao User

            # Verifique se o usuário já possui uma solicitação para esta ação
            if Solicitacao.objects.filter(acao=acao, voluntario=usuario).exists():
                return JsonResponse({'success': False, 'message': 'Você já possui uma solicitação para esta ação.'}, status=400)

            # Crie a solicitação
            solicitacao = Solicitacao(acao=acao, voluntario=usuario)
            solicitacao.save()

            return JsonResponse({'success': True, 'message': 'Solicitação criada com sucesso!'})

        return JsonResponse({'success': False, 'message': 'Método inválido.'}, status=405)
    
def response(request):
    acao = Acao.objects.get(pk='1')
    context = {'acao': acao}
    return render(request, 'base/response.html', context)


def pva(request, acao_id):
    acao = get_object_or_404(Acao, pk=acao_id)
    context = {'acao':acao}

    return render(request, 'base/pva.html', context)