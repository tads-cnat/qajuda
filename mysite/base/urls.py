from django.urls import path
from . import views

# app_name = 'base'
urlpatterns = [
    path('', views.index),
    path('base/detail/', views.detail, name="detail"),
    path('base/detalhe/<int:pk>/', views.DetalheViews.as_view(), name='detalhes'),
    path('base/response/', views.response, name="response"),
    path('base/voluntariar/', views.voluntariar, name="voluntariar"),
    path('base/pva/<int:acao_id>', views.pva, name="prop-viz-acao")
]