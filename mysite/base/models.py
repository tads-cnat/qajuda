from django.db import models
from enum import Enum


class Categoria(models.Model):
    nome = models.CharField(max_length=100)


class Usuario(models.Model):
    nome = models.CharField(max_length=80)
    senha = models.CharField(max_length=15)
    email = models.EmailField(max_length=200, unique=True)
    telefone1 = models.CharField(max_length=11)
    telefone2 = models.CharField(max_length=11)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=15)
    data_nasc = models.DateTimeField('data de nascimento')
    bio = models.TextField()
    incrito_em = models.DateTimeField(auto_now_add=True)
    categoria = models.ManyToManyField(Categoria)

    def __self__(self):
        return self.nome


class Acao(models.Model):
    nome = models.CharField(max_length=200)
    status = models.BooleanField() #vai ser um enum
    descricao = models.TextField()
    criada_em = models.DateTimeField(auto_now_add=True)
    modalidade = models.CharField(max_length=15)
    local = models.CharField(max_length=50)
    tema = models.CharField(max_length=20) ## Ñ seria melhor interpretar tema e categoria como se fosse uma só coisa? Ass. Rômulo
    max_volunt = models.IntegerField(null=True, blank=True)
    url = models.CharField(blank=True, max_length=200)
    categoria = models.ForeignKey(Categoria, null=True, blank=True, on_delete=models.SET_NULL)
    inicio = models.DateTimeField()
    fim = models.DateTimeField()

    def __self__(self):
        return self.nome

class Status(Enum):
    em_espera: 1
    aceito: 2
    rejeitado: 3
    participou: 4

# user voluntaria em ação -> classe associativa voluntário é criada
# baseado no Status da classe associativa Voluntário, as solicitações aparecem para os proprietários da ação
# se um proprietário "mudar o status" (aceitar ou rejeitar a solicitação), é salvo como "Proprietário" na associativa Voluntário.

# MUDAR OS NOMES DAS DUAS CLASSES ABAIXO (solicitação e resposta???)

class Proprietario(models.Model):
    proprietario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Voluntario(models.Model):
    voluntario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    status = Status
    proprietario = models.ForeignKey(Proprietario, blank=True, null=True, on_delete=models.SET_NULL) # esse atributo representa a classe acima.

    

class Foto(models.Model):
    foto = models.ImageField(upload_to='None', null=True)
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)


