from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'base/index.html')

def detail(request):
    return render(request, 'base/detail.html')

def response(request):
    return render(request, 'base/response.html')

def voluntariar(request):
    return render(request, 'base/voluntariar.html')