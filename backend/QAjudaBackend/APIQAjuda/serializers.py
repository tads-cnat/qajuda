from pyexpat import model
from rest_framework import serializers
from .models import Colaborador, Acao, Colaborador_acao, Foto, Categoria 

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        #fields = ('user', 'telefone1', 'bairro')
        fields = '__all__'

class ColaboradorAcaoSerializer(serializers.ModelSerializer):
    aceitar_solicitacao = serializers.BooleanField(write_only=True, required=False)
    recusar_solicitacao = serializers.BooleanField(write_only=True, required=False)

    class Meta:
        model = Colaborador_acao
        fields = '__all__'

class AcaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acao
        fields = '__all__'

class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = '__all__'

class CardDestaqueSerializer(serializers.Serializer):
    acao = AcaoSerializer()
    colaborador = ColaboradorSerializer()

    def create(self, validated_data):
        acao = validated_data.pop('acao_data')
        colaborador = validated_data.pop('colaborador_data')

        acao_instance = acao.objects.create(**acao)
        colaborador_instance = colaborador.objects.create(**colaborador)

        # Faça o que for necessário com as instâncias criadas

        return {
            'acao_instance': acao_instance,
            'colaborador_instance': colaborador_instance,
        }
