from django.db import models
from enum import Enum
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    telefone1 = models.CharField(max_length=11)
    telefone2 = models.CharField(max_length=11)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=15)
    data_nasc = models.DateTimeField('data de nascimento')
    bio = models.TextField()
    categoria = models.ManyToManyField(Categoria, blank=True)

    def __str__(self):
        return self.nome


class Acao(models.Model):
    nome = models.CharField(max_length=200)
    status = models.BooleanField() # Ativa: True, Inativa: False 
    descricao = models.TextField()
    criada_em = models.DateTimeField(auto_now_add=True)
    modalidade = models.BooleanField() # Online: True: , Offline: False
    local = models.CharField(max_length=50)
    tema = models.CharField(max_length=20) 
    max_volunt = models.IntegerField(null=True)
    url = models.CharField(blank=True, max_length=200)
    categoria = models.ForeignKey(Categoria, null=True, blank=True, on_delete=models.SET_NULL)
    inicio = models.DateTimeField()
    fim = models.DateTimeField(null=True)
    avaliacao = models.IntegerField(null=True)

    def __str__(self):
        return self.nome

class Proprietario(models.Model):
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE, default=1)
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario.nome

class Solicitacao(models.Model):
    class Status(models.TextChoices):
        EM_ESPERA = "ESP", _("Em espera")
        ACEITO = "ACC", _("Aceito")
        REJEITADO = "REJ", _("Rejeitado")
        PARTICIPOU = "PART", _("Participou")
    
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE, default=1)
    voluntario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    status = models.CharField(max_length=4, choices=Status.choices, default=Status.EM_ESPERA)
    proprietario = models.ForeignKey(Proprietario, blank=True, null=True, on_delete=models.SET_NULL) # esse atributo representa a classe acima.

    def __str__(self):
        return self.voluntario.nome + " ---> " + self.acao.nome

class Foto(models.Model):
    foto = models.ImageField(upload_to='None', null=True)
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)


