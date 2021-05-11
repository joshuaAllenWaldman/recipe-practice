from django.db import models

# Create your models here.
class Recipe(models.Model):
  name = models.CharField(max_length=100)
  url = models.URLField(max_length=250, unique=True)
  notes = models.CharField(max_length=1000, blank=True)
