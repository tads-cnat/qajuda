from django.db import models



class Periodo(models.Model):
    data_inicio = models.DateTimeField()
    data_fim = models.DateTimeField()
    hora_inicio = models.TimeField()
    hora_fim = models.TimeField()
    dia_semana = models.CharField(max_length=15)


class Endereco(models.Model):
    cep = models.CharField(max_length=8)
    logradouro = models.CharField(max_length=50)
    numero = models.CharField(max_length=6)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=15)
    referencia = models.CharField(max_length=15)


class Categoria(models.Model):
    nome = models.CharField(max_length=100)


class Usuarios(models.Model):
    nome = models.CharField(max_length=80)
    email = models.EmailField(max_length=200, unique=True)
    senha = models.CharField(max_length=15)
    #atributo foto
    telefone = models.CharField(max_length=11)
    cidade = models.CharField(max_length=15)
    bairro = models.CharField(max_length=15)
    data_nasc = models.DateTimeField('data de nascimento')
    biografia = models.TextField()
    incrito_em = models.DateTimeField(auto_now_add=True)
    categoria = models.ForeignKey(Categoria, null=True, on_delete=models.SET_NULL)

    def __self__(self):
        return self.nome


class Acao(models.Model):
    nome = models.CharField(max_length=200)
    status = models.BooleanField() #vai ser um enum
    #atributo foto
    descricao_acao = models.TextField()
    criada_em = models.DateField(auto_now_add=True)
    modalidade = models.CharField(max_length=10)
    tema = models.CharField(max_length=10)
    num_max_voluntario = models.IntegerField()
    url = models.CharField(max_length=200)
    ocorrencia = models.ForeignKey(Periodo, null=True, on_delete=models.SET_NULL)
    categoria = models.ForeignKey(Categoria, null=True, on_delete=models.SET_NULL)

    def __self__(self):
        return self.nome


    


