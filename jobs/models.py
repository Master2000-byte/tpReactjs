from django.db import models

# Create your models here.
class Employee(models.Model):
    matricule = models.CharField(max_length=120)
    name = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.EmailField()
    picture = models.URLField()

    def __str__(self):
        return self.name

class Profile(models.Model):
    DIPL_CHOICES = (
        ('SUP' , 'Superieur'),
        ('SEC' , 'Secondaire'),
    )
    employe = models.ForeignKey(Employee, on_delete=models.CASCADE)
    school = models.CharField(max_length=120)
    annee = models.IntegerField()
    cv = models.URLField()
    diplome = models.CharField(max_length=5, choices=DIPL_CHOICES)

    

