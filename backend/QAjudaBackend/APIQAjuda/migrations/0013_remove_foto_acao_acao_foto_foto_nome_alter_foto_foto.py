# Generated by Django 4.2.6 on 2023-12-14 01:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('APIQAjuda', '0012_delete_preferencia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='foto',
            name='acao',
        ),
        migrations.AddField(
            model_name='acao',
            name='foto',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='APIQAjuda.foto'),
        ),
        migrations.AddField(
            model_name='foto',
            name='nome',
            field=models.CharField(default='teste.png', max_length=100),
        ),
        migrations.AlterField(
            model_name='foto',
            name='foto',
            field=models.ImageField(blank=True, default='teste.png', null=True, upload_to='media'),
        ),
    ]