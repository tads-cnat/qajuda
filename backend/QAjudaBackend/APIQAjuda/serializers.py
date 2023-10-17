from pyexpat import model
from rest_framework import serializers
from .models import Solicitacao, Acao

class SolicitacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitacao
        fields = '__all__'

class AcaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acao
        fields = '__all__'