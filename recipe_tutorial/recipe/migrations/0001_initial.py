# Generated by Django 3.2.1 on 2021-05-06 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.URLField(max_length=250, unique=True)),
                ('notes', models.CharField(blank=True, max_length=1000)),
            ],
        ),
    ]
