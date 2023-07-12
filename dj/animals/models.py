from django.db import models


class Animals(models.Model):
    id = models.IntegerField(primary_key=True, null=False)
    label = models.CharField(max_length=30, null=False)
    lat = models.CharField(max_length=60, null=False)
    kingdom = models.CharField(max_length=60, null=False)
    description = models.TextField(null=False)

    def __str__(self):
        return f"{self.label} ({self.id})"

    class Meta:
        db_table = 'animals'
        managed = False

class Relations(models.Model):
    id = models.IntegerField(primary_key=True, null=False)
    source = models.IntegerField(null=False)
    target = models.IntegerField(null=False)

    def __str__(self):
        return f"{self.source} -> {self.target}"

    class Meta:
        db_table = 'relations'
        managed = False