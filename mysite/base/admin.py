from django.contrib import admin
from .models import Categoria, Usuario, Acao, Proprietario, Solicitacao, Foto

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Usuario)
admin.site.register(Acao)
admin.site.register(Proprietario)
admin.site.register(Solicitacao)
admin.site.register(Foto)

#class FotoAdmin(admin.ModelAdmin):
#    list_display = ["acao", "foto_tag"]

