from pyexpat import model
from rest_framework import serializers
from .models import *

class ColaboradorAcaoSerializer(serializers.ModelSerializer):
    aceitar_solicitacao = serializers.BooleanField(write_only=True, required=False)
    recusar_solicitacao = serializers.BooleanField(write_only=True, required=False)

    class Meta:
        model = Colaborador_acao
        fields = '_all_'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '_all_'

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = '_all_'

class AcaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acao
        fields = '_all_'

class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = '_all_'

class ColaboradorAcaoSerializer2(serializers.ModelSerializer):
    acao = AcaoSerializer()
    colaborador = ColaboradorSerializer()

    class Meta:
        model = Colaborador_acao
        fields = '_all_'

class CardDestaqueSerializer(serializers.ModelSerializer):
    criador = ColaboradorSerializer()
    categoria = CategoriaSerializer()

    class Meta:
        model = Acao
        fields = '_all_'