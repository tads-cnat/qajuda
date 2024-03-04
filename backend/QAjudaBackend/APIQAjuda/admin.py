from django.contrib import admin
from .models import Categoria, Colaborador, Acao, ColaboradorAcao, Notificacao, Foto

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Colaborador)
admin.site.register(Acao)
admin.site.register(ColaboradorAcao)
admin.site.register(Notificacao)
admin.site.register(Foto)