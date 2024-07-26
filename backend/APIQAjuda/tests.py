from django.test import TestCase
from .models import Acao, Foto, Categoria, Colaborador
from django.core.exceptions import ValidationError
from datetime import datetime, date

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

    def test_str_representation(self):
        self.assertEqual(str(self.acao), 'Ação de Teste')

    def test_criado_em_auto_now_add(self):
        self.assertIsNotNone(self.acao.criado_em)

    def test_qtd_voluntarios_default_value(self):
        self.assertEqual(self.acao.qtd_voluntarios, 0)

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