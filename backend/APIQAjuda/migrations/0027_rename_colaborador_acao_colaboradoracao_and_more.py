# Generated by Django 4.2.6 on 2024-03-04 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0026_auto_20240304_0959'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Colaborador_acao',
            new_name='ColaboradorAcao',
        ),
        migrations.AlterField(
            model_name='colaborador',
            name='categoria',
            field=models.ManyToManyField(blank=True, to='APIQAjuda.categoria'),
        ),
        migrations.AlterField(
            model_name='colaborador',
            name='data_nascimento',
            field=models.DateTimeField(verbose_name='Data de Nascimento'),
        ),
        migrations.AlterField(
            model_name='foto',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='fotos/'),
        ),
        migrations.AlterField(
            model_name='foto',
            name='nome',
            field=models.TextField(blank=True, max_length=100),
        ),
    ]
