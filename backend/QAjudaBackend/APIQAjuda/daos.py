from .models import Acao

# aqui estarão as classes DAO
class AcaoDAO:
    def acao_list(self):
        lista_acao = Acao.objects.all()
        return lista_acao
        
    def detalhe_acao(self, id):
        acao = Acao.objects.get(pk=id)
        return acao