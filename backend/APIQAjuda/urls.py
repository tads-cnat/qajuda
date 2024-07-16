from django.urls import include, path
from rest_framework import routers
from . import views
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'acao', views.AcaoViewSet)
router.register(r'colaborador', views.ColaboradorViewSet)
router.register(r'solicitacao', views.SolicitacaoVoluntariadoViewSet)
router.register(r'categoria', views.CategoriaViewSet)
router.register(r'foto', views.FotoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/doc/', SpectacularSwaggerView.as_view(url_name='schema'),
         name='swagger-ui'),
]
