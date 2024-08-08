import datetime
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.conf import settings


class UserManager(BaseUserManager):
    def create_user(self, username, password=None, data_nascimento=datetime.date.today().isoformat(), **extra_fields):
        if not username:
            raise ValueError("O campo 'username' é obrigatório.")
        user = self.model(username=username,
                          data_nascimento=data_nascimento, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("O superusuário deve ter is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("O superusuário deve ter is_superuser=True.")

        return self.create_user(username, password, **extra_fields)


class Colaborador(AbstractUser):
    nome = models.CharField(max_length=150)
    telefone = models.CharField(max_length=11)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=30)
    data_nascimento = models.DateField()
    bio = models.TextField(max_length=100)

    objects = UserManager()  # type: ignore

    first_name = None
    last_name = None

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = 'Colaboradores'


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = 'Categorias'


class Foto(models.Model):
    nome = models.TextField(max_length=100, blank=True)
    foto = models.ImageField(
        upload_to='APIQAjuda/static/', null=True, blank=True)

    def __str__(self):
        return self.nome

    def get_absolute_url(self):
        if self.foto:
            return settings.BASE_URL + self.foto.url
        return ''

    class Meta:
        verbose_name_plural = 'Fotos'


class Acao(models.Model):
    nome = models.CharField(max_length=100)
    ativa = models.BooleanField(default=True)
    descricao = models.TextField()
    endereco = models.CharField(max_length=100)
    max_voluntarios = models.IntegerField(null=True, blank=True)
    inicio = models.DateTimeField()
    fim = models.DateTimeField(null=True, blank=True)
    qtd_voluntarios = models.IntegerField(null=True, blank=True, default=0)
    foto = models.ForeignKey(Foto, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    criado_por = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome

    def clean(self):
        if len(self.nome) < 0 or len(self.nome) > 100:
            raise ValidationError({
                'nome': _('O nome deve estar entre 1 e 100')
            })
        if self.max_voluntarios != None and self.max_voluntarios < self.qtd_voluntarios:  # type: ignore
            raise ValueError({
                'qtd_voluntarios': _('Quantidade de voluntarios execede o máximo')
            })

    class Meta:
        verbose_name_plural = 'Ações'


class Status(models.TextChoices):
    EM_ESPERA = "em_espera", _("Em espera")
    ACEITO = "aceito", _("Aceito")
    REJEITADO = "rejeitado", _("Rejeitado")


class SolicitacaoVoluntariado(models.Model):
    acao = models.ForeignKey(Acao, on_delete=models.CASCADE)
    colaborador = models.ForeignKey(Colaborador, on_delete=models.CASCADE)
    status = models.CharField(null=True, blank=True,
                              max_length=9, choices=Status.choices)
    solicitado_em = models.DateTimeField(auto_now_add=True)
    modificado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.colaborador.nome} solicitou participar de {self.acao.nome}"

    class Meta:
        verbose_name_plural = 'Solicitações de Voluntariado'
