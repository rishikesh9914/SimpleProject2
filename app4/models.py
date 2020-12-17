from django.db import models

class RegistrationModel(models.Model):
    number= models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    contact=models.IntegerField(unique=True)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=30)
    def __str__(self):
        return self.name

