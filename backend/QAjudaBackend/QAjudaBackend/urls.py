"""
URL configuration for QAjudaBackend project.

The urlpatterns list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from APIQAjuda.views import *
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from APIQAjuda.swagger import swagger_info


schema_view = get_schema_view(
    swagger_info,
    public=True,
    permission_classes=(),
)

router = routers.DefaultRouter()
#router.register(r'solicitacoes', SolicitacaoViewSet)
#router.register(r'acao', AcaoViewSet)
#router.register(r'carddestaque', CardDestaqueViewSet)
#router.register(r'colaborador', ColaboradorViewSet)
#router.register(r'colaborador_acao2', ColaboradorAcaoViewSet2)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    
    # Rota colaborador_acao
    path('colaborador_acao/', ColaboradorAcaoViewSet2.as_view(
        {'get':'list', 'post':'create'}
        ), name='colaborador_acao'),
    path('colaborador_acao/<int:id>/', ColaboradorAcaoViewSet2.as_view(
        {'get':'read', 'put':'update', 'patch':'update', 'delete':'delete'}
        ), name='colaborador_acao'),
    
    # Rota acao
    path('acao/', AcaoViewSet.as_view(
        {'get':'list', 'post':'create'}
        ), name='acao'),
    path('acao/<int:id>/', AcaoViewSet.as_view(
        {'get':'read', 'put':'update', 'patch':'update', 'delete':'delete'}
        ), name='acao'),

    # Rota colaborador
    path('colaborador/', ColaboradorViewSet.as_view(
        {'get':'list', 'post':'create'}
        ), name='colaborador'),
    path('colaborador/<int:id>/', ColaboradorViewSet.as_view(
        {'get':'read', 'put':'update', 'patch':'update', 'delete':'delete'}
        ), name='colaborador'),

    # Rota card_destaque
    path('card_destaque/', CardDestaqueViewSet.as_view(
        {'get':'list', 'post':'create'}
        ), name='card_destaque'),
    path('card_destaque/<int:id>/', CardDestaqueViewSet.as_view(
        {'get':'read', 'put':'update', 'patch':'update', 'delete':'delete'}
        ), name='card_destaque'),
    
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('solicitacoes/<int:acao_id>/', SolicitacoesEmAbertoView.as_view(), name='solicitacoes-em-aberto'),
]