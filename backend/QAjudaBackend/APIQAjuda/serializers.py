from pyexpat import model
from rest_framework import serializers
from .models import Colaborador, Acao, Colaborador_acao 

class SolicitacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador_acao
        fields = '__all__'

class AcaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acao
        fields = '__all__'

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = '__all__'

class SolicitacaoColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador_acao
        fields = [
            'colaborador',
        ]
