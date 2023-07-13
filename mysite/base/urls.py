from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('base/detail/', views.detail, name="detail"),
    path('base/response/', views.response, name="response"),
    path('base/voluntariar/', views.voluntariar, name="voluntariar"),
    path('base/pva/<int:acao_id>', views.pva, name="prop-viz-acao")
]