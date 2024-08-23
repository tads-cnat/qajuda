from django.test import TestCase
from .models import Acao, Foto, Categoria, Colaborador
from django.core.exceptions import ValidationError
from datetime import datetime, date
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken

class AcaoTestCase(TestCase):
    def setUp(self):
        data_nascimento = date(1990, 1, 1)
        self.foto = Foto.objects.create()  
        self.categoria = Categoria.objects.create()  
        self.colaborador = Colaborador.objects.create(data_nascimento=data_nascimento)  

        self.acao = Acao.objects.create(
            nome='Ação de Teste',
            descricao='Descrição da ação de teste',
            endereco='Endereço da ação',
            max_voluntarios = 2,
            inicio=datetime.now(),
            foto=self.foto,
            categoria=self.categoria,
            criado_por=self.colaborador,
        )
    # Testes de unidade str_representation
    def test_str_representation(self):
        self.assertEqual(str(self.acao), 'Ação de Teste')
    # Testes de unidade de validação de campos, adição automatica de data
    def test_criado_em_auto_now_add(self):
        self.assertIsNotNone(self.acao.criado_em)
    # teste de unidade da quantidade de voluntarios defaults
    def test_qtd_voluntarios_default_value(self):
        self.assertEqual(self.acao.qtd_voluntarios, 0)
    # teste de unidade de nome da ação
    def test_nome_max_length(self):
        max_length = self.acao._meta.get_field('nome').max_length
        self.assertLessEqual(len(self.acao.nome), max_length)
   
    def test_nome_exceeds_100_characters(self):
            long_nome = 'a' * 101
            with self.assertRaises(ValidationError):
                acao = Acao(
                    nome=long_nome,
                    descricao='Descrição da ação com nome longo',
                    endereco='Endereço da ação',
                    inicio=datetime.now(),
                    foto=self.foto,
                    categoria=self.categoria,
                    criado_por=self.colaborador,
                )
                acao.full_clean() 
                acao.save()
    def test_nome_vazio(self):
        vazio_nome = ''
        with self.assertRaises(ValidationError):
            acao = Acao(
                nome= vazio_nome,
                descricao='Descrição da ação vazio',
                endereco='Endereço da ação',
                inicio=datetime.now(),
                foto=self.foto,
                categoria=self.categoria,
                criado_por=self.colaborador,
            )
            acao.full_clean()
            acao.save()
    # teste unitario para voluntarios maximos
    def test_max_voluntario_valido(self):
        voluntarios_validos = 2
        self.assertLessEqual(self.acao.max_voluntarios, voluntarios_validos)
        
    def test_max_voluntario_invalido(self):
        with self.assertRaises(ValueError):
            acao = Acao(
                nome= 'nome invalido',
                descricao='Descrição da ação vazio',
                endereco='Endereço da ação',
                max_voluntarios = 2,
                inicio=datetime.now(),
                qtd_voluntarios = 3,
                foto=self.foto,
                categoria=self.categoria,
                criado_por=self.colaborador,
            )  
            acao.full_clean()
            acao.save()

class AcaoCreateTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        #cria um user e um token de acesso
        self.user = Colaborador.objects.create_user(username='testuser', password='12345')
        self.refresh = RefreshToken.for_user(self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer  {self.refresh.access_token}')

        self.url = reverse('acao-list')
        data_nascimento = date(1990, 1, 1)
        self.foto = Foto.objects.create()
        self.categoria = Categoria.objects.create()
        self.colaborador = Colaborador.objects.create(data_nascimento=data_nascimento)

    # Teste de criação de ação
    def test_create_acao(self):
        data = {
            'nome': 'Ação de Teste',
            'descricao': 'Descrição da ação de teste',
            'endereco': 'Endereço da ação',
            'max_voluntarios': 2,
            'inicio': datetime.now(),
            'foto': self.foto.id,
            'categoria': self.categoria.id,
            'criado_por': self.colaborador.id,
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Acao.objects.count(), 1)
        self.assertEqual(Acao.objects.get().nome, 'Ação de Teste')

    # teste invalido de criação de ação
    def test_user_sem_permissao(self):
        # remove o token de acesso
        self.client.credentials()
        data = {
            'nome': 'Ação de Teste1',
            'descricao': 'Descrição da ação de teste1',
            'endereco': 'Endereço da ação1',
            'max_voluntarios': 2,
            'inicio': datetime.now(),
            'foto': self.foto.id,
            'categoria': self.categoria.id,
            'criado_por': self.colaborador.id,
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Acao.objects.count(), 0)
    # testa se o campo nome pode ser vazio
    def test_campos_invalidos(self):
        data = {
            'nome': '',
            'descricao': 'Descrição da ação de teste',
            'endereco': 'Endereço da ação',
            'max_voluntarios': 2,
            'inicio': datetime.now(),
            'foto': self.foto.id,
            'categoria': self.categoria.id,
            'criado_por': self.colaborador.id,
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Acao.objects.count(), 0)
    
    def test_list_acao(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 0)
        self.assertEqual(Acao.objects.count(), 0)

        data = {
            'nome': 'Ação de Teste',
            'descricao': 'Descrição da ação de teste',
            'endereco': 'Endereço da ação',
            'max_voluntarios': 2,
            'inicio': datetime.now(),
            'foto': self.foto.id,
            'categoria': self.categoria.id,
            'criado_por': self.colaborador.id,
        }

        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Acao.objects.count(), 1)

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)