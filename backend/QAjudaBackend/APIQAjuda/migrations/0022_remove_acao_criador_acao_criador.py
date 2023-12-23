# Generated by Django 4.2.6 on 2023-12-23 13:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0021_remove_acao_criador_alter_acao_foto_acao_criador'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='acao',
            name='criador',
        ),
        migrations.AddField(
            model_name='acao',
            name='criador',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='APIQAjuda.colaborador'),
        ),
    ]
