# Generated by Django 4.2.6 on 2024-08-21 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0002_alter_solicitacaovoluntariado_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborador',
            name='acoes',
            field=models.ManyToManyField(related_name='colaboradores', to='APIQAjuda.acao'),
        ),
    ]
