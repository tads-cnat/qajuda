from pyexpat import model
from rest_framework import fields, serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class FotoSerializer(serializers.ModelSerializer):
    foto = serializers.FileField()
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
    class Meta:
        model = Acao
        fields = '__all__'
        read_only_fields = ['criador']
        
class ListAcaoSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only=True)
    foto = FotoSerializer(read_only=True)
    criador = ColaboradorSerializer(read_only=True)
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
        model = ColaboradorAcao
        fields = '__all__'

class ColaboradorBancoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Colaborador
        fields = '__all__'

class ColaboradorAcaoBancoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ColaboradorAcao
        fields = '__all__'
