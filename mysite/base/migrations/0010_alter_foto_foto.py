# Generated by Django 4.1.2 on 2023-07-25 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_acao_criador_alter_acao_descricao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foto',
            name='foto',
            field=models.ImageField(null=True, upload_to='media/imagensacoes'),
        ),
    ]