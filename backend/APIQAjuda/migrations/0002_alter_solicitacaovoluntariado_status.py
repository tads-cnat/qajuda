# Generated by Django 4.2.6 on 2024-07-26 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='solicitacaovoluntariado',
            name='status',
            field=models.CharField(blank=True, choices=[('em_espera', 'Em espera'), ('aceito', 'Aceito'), ('rejeitado', 'Rejeitado')], max_length=9, null=True),
        ),
    ]