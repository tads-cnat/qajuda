from django.contrib import admin
from .models import Categoria, Colaborador, Acao, Responsavel, Solicitacao, Foto

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Colaborador)
admin.site.register(Acao)
admin.site.register(Responsavel)
admin.site.register(Solicitacao)
admin.site.register(Foto)