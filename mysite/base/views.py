from django.shortcuts import render, get_object_or_404
from .models import Acao

# Create your views here.

def index(request):
    return render(request, 'base/index.html')

def detail(request):
    return render(request, 'base/detail.html')

def response(request):
    return render(request, 'base/response.html')

def pva(request, acao_id):
    acao = get_object_or_404(Acao, pk=acao_id)
    context = {'acao':acao}
    return render(request, 'base/pva.html', context)