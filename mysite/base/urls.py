from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('base/detail/', views.detail, name="detail"),
    path('base/response/', views.response, name="response"),
    path('base/pva', views.pva, name="prop-viz-acao")
]