# Generated by Django 4.2.6 on 2023-10-25 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0009_remove_colaborador_acao_criador_alter_acao_criador'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborador_acao',
            name='criador',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
