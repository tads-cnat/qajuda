from django.shortcuts import get_object_or_404, render
from django.views import View
from django.views.generic.detail import DetailView
from .daos import AcaoDAO
from .models import Acao, Solicitacao, Foto

# Create your views here.

# class IndexViews(View):
#     def index(self, request):
#         lista_acao = AcaoDAO.acao_list(request)
#         solicitacao = Solicitacao.objects.filter(acao='lavarroupa').count()

#         acao_destaque = lista_acao.order_by('-')
#         context = {'lista_acao': lista_acao}
#         return render(request, 'base/index.html', context)


def index(request):
    return render(request, 'base/index.html')

class DetalheViews(View):
    def get(self, request, *args, **kwargs):
        acao = get_object_or_404(Acao, pk=kwargs['pk'])
        # foto = acao.foto_set.first()
        context = {'acao': acao}
        return render(request, 'base/detalhe.html', context)



def response(request):
    return render(request, 'base/response.html')

class VoluntariarViews(View):
    def get(self, request, *args, **kwargs):
        acao = get_object_or_404(Acao, pk=kwargs['pk'])
        context = {'acao' : acao}
        return render(request, 'base/voluntariar.html', context)

# def voluntariar(request):
#     return render(request, 'base/voluntariar.html')

def pva(request, acao_id):
    acao = get_object_or_404(Acao, pk=acao_id)
    context = {'acao':acao}
    return render(request, 'base/pva.html', context)





