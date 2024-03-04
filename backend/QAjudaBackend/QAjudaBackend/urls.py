"""
URL configuration for QAjudaBackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
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
from django.conf import settings
from django.conf.urls.static import static 


schema_view = get_schema_view(
    swagger_info,
    public=True,
    permission_classes=(),
)

router = routers.DefaultRouter()
#router.register(r'solicitacoes', SolicitacaoViewSet)
router.register(r'acao', AcaoViewSet)
#router.register(r'card_destaque', CardDestaqueViewSet)
router.register(r'colaborador', ColaboradorViewSet)
router.register(r'colaborador_acao', ColaboradorAcaoViewSet)
router.register(r'categoria', CategoriaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),  
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('upload/', FotoViewSet.as_view(), name='upload_image'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
