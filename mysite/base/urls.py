from django.urls import path
from . import views
from .business import solicitar_participacao
from .views import VoluntariarViews

app_name = 'base'
urlpatterns = [
    path('', views.index),
    # path('', views.IndexViews.as_view(), name='index'),
    path('base/detalhe/<int:pk>/', views.DetalheViews.as_view(), name='detalhes'),
    path('base/response/', views.response, name="response"),
    path('base/voluntariar/<int:pk>/', views.VoluntariarViews.as_view(), name='voluntariar'),
    path('voluntariar_em_acao/<int:acao_id>/', VoluntariarViews.voluntariar_em_acao, name='voluntariar_em_acao'),

    path('base/pva/<int:acao_id>', views.pva, name="prop-viz-acao"),
    # roda bo botão
    path('solicitar-participacao/', solicitar_participacao, name='solicitar_participacao'),
]