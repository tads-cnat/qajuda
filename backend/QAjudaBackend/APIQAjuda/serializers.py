from pyexpat import model
from rest_framework import serializers
from .models import Colaborador, Acao, Colaborador_acao 

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = ('user', 'telefone1', 'bairro')

class ColaboradorAcaoSerializer(serializers.ModelSerializer):
    aceitar_solicitacao = serializers.BooleanField(write_only=True, required=False)
    recusar_solicitacao = serializers.BooleanField(write_only=True, required=False)

    class Meta:
        model = Colaborador_acao
        fields = '__all__'