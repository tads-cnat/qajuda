# Generated by Django 4.2.6 on 2023-12-23 16:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0024_alter_acao_qtd_volunt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='acao',
            name='criador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='APIQAjuda.colaborador'),
        ),
    ]
