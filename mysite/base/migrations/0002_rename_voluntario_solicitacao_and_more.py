# Generated by Django 4.2 on 2023-07-03 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Voluntario',
            new_name='Solicitacao',
        ),
        migrations.RemoveField(
            model_name='proprietario',
            name='proprietario',
        ),
        migrations.AddField(
            model_name='proprietario',
            name='usuario',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='base.usuario'),
        ),
    ]