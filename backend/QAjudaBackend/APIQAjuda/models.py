from django.db import models
from enum import Enum
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe

class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Colaborador(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    telefone1 = models.CharField(max_length=11)
    telefone2 = models.CharField(max_length=11, null=True)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=30)
    data_nasc = models.DateTimeField('data de nascimento')
    bio = models.TextField(max_length=100)
    categoria = models.ManyToManyField(Categoria, blank=True)

    def __str__(self):
        return self.user.username


class Acao(models.Model):
    nome = models.CharField(max_length=100)
    status = models.BooleanField() # Ativa: True, Inativa: False 
    descricao = models.TextField('descrição')
    criada_em = models.DateTimeField(auto_now_add=True)
    modalidade = models.BooleanField() # Online: True: , Offline: False
    local = models.CharField(max_length=100)
    tema = models.CharField(max_length=20, null=True) 
    max_volunt = models.IntegerField(null=True)
    url = models.CharField(blank=True, max_length=200)
    inicio = models.DateTimeField()
    fim = models.DateTimeField(null=True)
    avaliacao = models.IntegerField(null=True)
    categoria = models.ForeignKey(Categoria, null=True, blank=True, on_delete=models.SET_NULL)
    criador = models.ForeignKey(Colaborador, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nome

    def get_foto(self):
        for foto in self.foto_set.all():
            return foto.foto.url
        return None

    def get_descricao(self):
        return str(self.descricao)[:230] + "..."

class Status(models.TextChoices):
    EM_ESPERA = "ESP", _("Em espera")
    ACEITO = "ACC", _("Aceito")
    REJEITADO = "REJ", _("Rejeitado")
    PARTICIPOU = "PART", _("Participou")

class Colaborador_acao(models.Model):
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)
    colaborador = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    convite = models.CharField(null=True, max_length=4, choices=Status.choices)
    data_convite = models.DateTimeField(null=True)
    solicitacao = models.CharField(null=True, max_length=4, choices=Status.choices)
    data_solicitacao = models.DateTimeField(null=True)
    responsavel = models.ForeignKey(Colaborador, on_delete=models.CASCADE, null=True)
    data_responsavel = models.DateTimeField(null=True)
    criador = models.ForeignKey(Colaborador, on_delete=models.CASCADE, null=True)

    def __str__(self):
        relacao = " -> não tem relação -> "
        status = ""
        if convite != None: 
            relacao = " -> convidado para administrar -> "
            status = convite
        elif solicitacao != None:
            relacao = " -> solicitou participar -> "
            status = solicitacao
        elif criador != None:
            relacao = " -> criou -> "
            status = ""

        return self.Colaborador.user.username + relacao +  self.acao.nome + status

class Foto(models.Model):
    foto = models.ImageField(upload_to='media/imagensacoes', null=True)
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)

    def __str__(self):
        return self.acao.nome

class Preferencia(models.Model):
    colaborador = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    categoria = models.ManyToManyField(Categoria, blank=True)

class Notificacao(models.Model):
    titulo = models.CharField(max_length=100)
    mensagem = models.TextField()
    colaborador_acao = models.ForeignKey(Colaborador_acao, on_delete=models.CASCADE)