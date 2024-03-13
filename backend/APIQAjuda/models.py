from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User

class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = 'Categorias'


class Foto(models.Model):
    nome = models.TextField(max_length=100, blank=True)
    foto = models.ImageField(
        upload_to='fotos/', null=True, blank=True)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = 'Fotos'


class Colaborador(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    telefone1 = models.CharField(max_length=11)
    telefone2 = models.CharField(max_length=11, null=True, blank=True)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=30)
    data_nascimento = models.DateTimeField('Data de Nascimento')
    bio = models.TextField(max_length=100)
    categoria = models.ManyToManyField(Categoria, blank=True)

    def __str__(self):
        if self.user.first_name == None:
            return self.user.username
        else:
            return self.user.first_name

    class Meta:
        verbose_name_plural = 'Colaboradores'


class Acao(models.Model):
    nome = models.CharField(max_length=100)
    status = models.BooleanField()
    descricao = models.TextField('descrição')
    criada_em = models.DateTimeField(auto_now_add=True)
    modalidade = models.BooleanField()
    local = models.CharField(max_length=100)
    tema = models.CharField(max_length=20, null=True, blank=True) 
    max_volunt = models.IntegerField(null=True, blank=True)
    url = models.CharField(null=True, blank=True, max_length=200)
    inicio = models.DateTimeField()
    fim = models.DateTimeField(null=True, blank=True)
    avaliacao = models.IntegerField(null=True, blank=True)
    qtd_volunt = models.IntegerField(null=True, blank=True, default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    criador = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    foto = models.ForeignKey(Foto, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

    def get_foto(self):
        for foto in self.foto_set.all():
            return foto.foto.url
        return None

    def get_descricao(self):
        return str(self.descricao)[:230] + "..."

    class Meta:
        verbose_name_plural = 'Ações'

class Status(models.TextChoices):
    EM_ESPERA = "E", _("Em espera")
    ACEITO = "A", _("Aceito")
    REJEITADO = "R", _("Rejeitado")
    PARTICIPOU = "P", _("Participou")
    # CANCELADO = "C", _("Cancelado") # sugestão para PDS CORPORATIVO

class SolicitacaoVoluntariado(models.Model):
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)
    colaborador = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    status = models.CharField(null=True, blank=True, max_length=1, choices=Status.choices)
    solicitado_em = models.DateTimeField(auto_now_add=True)
    modificado_em = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"[{self.get_status_display()}] {self.colaborador.user.first_name} solicitou participar de {self.acao.nome}"
    
    class Meta:
        verbose_name_plural = 'Solicitações de Voluntariado'

class Notificacao(models.Model):
    titulo = models.CharField(max_length=100)
    mensagem = models.TextField()
    colaborador_acao = models.ForeignKey(SolicitacaoVoluntariado, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Notificações'