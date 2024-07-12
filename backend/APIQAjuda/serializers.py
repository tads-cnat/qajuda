from rest_framework import serializers
from .models import *


class FotoSerializer(serializers.ModelSerializer):
    foto = serializers.FileField()

    class Meta:
        model = Foto
        fields = '__all__'


class ColaboradorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Colaborador
        fields = ('id', 'nome', 'telefone', 'cidade',
                  'bairro', 'data_nascimento', 'bio')


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class AcaoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Acao
        fields = '__all__'
        read_only_fields = ['status', 'url',
                            'qtd_voluntarios', 'criado_em', 'criado_por']


class ListAcaoSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only=True)
    foto = FotoSerializer(read_only=True)
    criado_por = ColaboradorSerializer(read_only=True)

    class Meta:
        model = Acao
        fields = '__all__'


class CardDestaqueSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    criador = ColaboradorSerializer()

    class Meta:
        model = Acao
        fields = '__all__'


class ListSolicitacaoVoluntariadoSerializer(serializers.ModelSerializer):
    acao = AcaoSerializer()
    colaborador = ColaboradorSerializer()

    class Meta:
        model = SolicitacaoVoluntariado
        fields = '__all__'


class SolicitacaoVoluntariadoSerializer(serializers.ModelSerializer):
    colaborador = ColaboradorSerializer(read_only=True)
    modificado_em = serializers.DateTimeField(read_only=True)

    class Meta:
        model = SolicitacaoVoluntariado
        fields = '__all__'
