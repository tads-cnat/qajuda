from django.urls import path
from . import views
from .business import solicitar_participacao

# app_name = 'base'
urlpatterns = [
    path('', views.index),
    path('base/detalhe/<int:pk>/', views.DetalheViews.as_view(), name='detalhes'),
    path('base/response/', views.response, name="response"),
    path('base/voluntariar/<int:pk>/', views.VoluntariarViews.as_view(), name='voluntariar'),

    path('base/pva/<int:acao_id>', views.pva, name="prop-viz-acao"),
    # roda bo botão
    path('solicitar-participacao/', solicitar_participacao, name='solicitar_participacao'),
]