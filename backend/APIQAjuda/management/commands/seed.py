import os

from APIQAjuda.models import *
from django.conf import settings
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Populate database with categories, actions, photos, and a user'

    def handle(self, *args, **kwargs):
        Categoria.objects.all().delete()

        categorias_data = [
            {"id": 1, "nome": "Assistência Social"},
            {"id": 2, "nome": "Sustentabilidade"},
            {"id": 3, "nome": "Meio Ambiente"},
            {"id": 4, "nome": "Bem-Estar Social"},
            {"id": 5, "nome": "Cidadania"},
            {"id": 6, "nome": "Saúde"},
            {"id": 7, "nome": "Educação"},
            {"id": 8, "nome": "Saúde Pública"}
        ]

        for categoria_data in categorias_data:
            Categoria.objects.create(
                id=categoria_data['id'], nome=categoria_data['nome'])

        acoes_data = [
            {
                "nome": "Distribuição de Alimentos",
                "descricao": "Queridos amigos e amigas,\n Neste momento desafiador, unimos nossas forças para espalhar amor e esperança. A Campanha Solidária: Alimentando Corações tem como objetivo levar alimentos e carinho às famílias que mais precisam. Juntos, podemos fazer a diferença!\nComo você pode ajudar?\nDoações de Alimentos Não Perecíveis: Contribua com arroz, feijão, macarrão, enlatados e outros alimentos não perecíveis. Cada grão conta!\nVoluntariado: Seja parte ativa dessa corrente do bem. Doe seu tempo para embalar e distribuir os alimentos. Cada sorriso que compartilhamos é uma vitória!\nDivulgue a Campanha: Compartilhe nas redes sociais, fale com amigos e familiares. Quanto mais pessoas souberem, mais impacto teremos.\nEmpatia e Solidariedade: Lembre-se de que, por trás de cada doação, há uma história. Seja gentil e compreensivo com todos que cruzarem seu caminho.\nJuntos, podemos encher pratos vazios e aquecer corações famintos. Vamos alimentar a esperança e construir um mundo mais justo e solidário.",
                "endereco": "Praça Central",
                "max_voluntarios": 15,
                "inicio": "2024-04-10T10:00:00.000Z",
                "fim": "2024-04-10T13:00:00.000Z",
                "categoria_id": 1,
                "foto": "distribuicao-alimentos.webp"
            },
            {
                "nome": "Plantio de Árvores",
                "descricao": "Venha nos ajudar a plantar árvores no parque da cidade para contribuir com o meio ambiente.",
                "endereco": "Parque Verde",
                "max_voluntarios": 30,
                "inicio": "2024-04-17T08:00:00.000Z",
                "fim": "2024-04-17T12:00:00.000Z",
                "categoria_id": 2,
                "foto": "plantio.jpg"
            },
            {
                "nome": "Oficina de Reciclagem",
                "descricao": "Participe da nossa oficina e aprenda sobre reciclagem e reaproveitamento de materiais.",
                "endereco": "Centro Comunitário",
                "max_voluntarios": 25,
                "inicio": "2024-04-20T14:00:00.000Z",
                "fim": "2024-04-20T16:00:00.000Z",
                "categoria_id": 3,
                "foto": "reciclagem.jpg"
            },
            {
                "nome": "Visita ao Lar de Idosos",
                "descricao": "Faça a diferença na vida dos idosos da nossa comunidade. Venha passar um tempo agradável com eles e ouvir suas histórias.",
                "endereco": "Casa de Repouso São Francisco",
                "max_voluntarios": 10,
                "inicio": "2024-04-12T14:00:00.000Z",
                "fim": "2024-04-12T16:00:00.000Z",
                "categoria_id": 4,
                "foto": "idosos.webp"
            },
            {
                "nome": "Limpeza de Ruas",
                "descricao": "Junte-se a nós para limpar as ruas do bairro e tornar nossa comunidade mais limpa e segura.",
                "endereco": "Rua Principal",
                "max_voluntarios": 20,
                "inicio": "2024-04-14T09:00:00.000Z",
                "fim": "2024-04-14T12:00:00.000Z",
                "categoria_id": 5,
                "foto": "limpeza-rua.jpeg"
            },
            {
                "nome": "Doação de Sangue",
                "descricao": "Contribua para salvar vidas doando sangue no hemocentro endereco. Cada doação faz a diferença.",
                "endereco": "Hemocentro Municipal",
                "max_voluntarios": 15,
                "inicio": "2024-04-18T08:00:00.000Z",
                "fim": "2024-04-18T15:00:00.000Z",
                "categoria_id": 6,
                "foto": "doacao-sangue.jpg"
            },
            {
                "nome": "Aula de Reforço Escolar",
                "descricao": "Voluntários são bem-vindos para ajudar alunos do ensino fundamental em suas lições de casa e estudos.",
                "endereco": "Escola Municipal José da Silva",
                "max_voluntarios": 10,
                "inicio": "2024-04-19T13:00:00.000Z",
                "fim": "2024-04-19T15:00:00.000Z",
                "categoria_id": 7,
                "foto": "reforco.jpg"
            },
            {
                "nome": "Campanha de Vacinação",
                "descricao": "Participe da nossa campanha de vacinação contra a gripe. Ajude a proteger nossa comunidade.",
                "endereco": "Posto de Saúde Central",
                "max_voluntarios": 8,
                "inicio": "2024-04-25T10:00:00.000Z",
                "fim": "2024-04-25T16:00:00.000Z",
                "categoria_id": 8,
                "foto": "vacinacao.jpg"
            }
        ]

        Colaborador.objects.all().delete()

        colaborador_data = {
            "nome": "João Ninguém",
            "username": "admin",
            "password": "admin",
            "email": "admin@gmail.com",
            "data_nascimento": datetime.date.today().isoformat()
        }

        colaborador = Colaborador.objects.create_superuser(  # type: ignore
            **colaborador_data)

        Acao.objects.all().delete()

        for acao_data in acoes_data:
            categoria_id = acao_data.pop('categoria_id')
            foto_nome = acao_data.pop('foto')
            foto_path = os.path.join('APIQAjuda', 'static', foto_nome)
            categoria = Categoria.objects.get(id=categoria_id)
            foto = Foto.objects.create(nome=acao_data['nome'], foto=foto_path)
            acao_data['categoria'] = categoria
            acao_data['foto'] = foto
            acao_data['criado_por'] = colaborador
            Acao.objects.create(**acao_data)

        self.stdout.write(self.style.SUCCESS(
            'Database populated successfully'))
