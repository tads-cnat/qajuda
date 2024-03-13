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
from django.urls import path, include
from APIQAjuda.views import *
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.conf import settings
from django.conf.urls.static import static 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
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
    path('upload/', FotoViewSet.as_view(), name='upload_image'),

    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/doc/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    path('solicitacoes/<int:pk>/aceitar/', AceitarRecusarSolicitacaoView.as_view({'post': 'aceitar'}), name='aceitar_solicitacao'),
    path('solicitacoes/<int:pk>/recusar/', AceitarRecusarSolicitacaoView.as_view({'post': 'recusar'}), name='recusar_solicitacao'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
