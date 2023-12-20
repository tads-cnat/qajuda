from pyexpat import model
from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = '__all__'

class ColaboradorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Colaborador
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class AcaoSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    foto = FotoSerializer()
    class Meta:
        model = Acao
        fields = '__all__'

class CardDestaqueSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer()
    criador = ColaboradorSerializer()

    class Meta:
        model = Acao
        fields = '__all__'

class ColaboradorAcaoSerializer(serializers.ModelSerializer):
    acao = AcaoSerializer()
    colaborador = ColaboradorSerializer()

    class Meta:
        model = Colaborador_acao
        fields = '__all__'