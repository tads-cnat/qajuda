# Generated by Django 4.2 on 2023-07-03 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_rename_voluntario_solicitacao_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proprietario',
            name='usuario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='base.usuario'),
        ),
    ]
