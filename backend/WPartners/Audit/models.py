from django.db import models
from django.contrib.auth.models import User


class OrgDetails(models.Model):
    totalAvailableScore = models.IntegerField()
    score1 = models.IntegerField()
    score2 = models.IntegerField()
    # Don't know field types yet fully

class categoryTwo(models.Model):
    totalAvailableScore = models.IntegerField()
    score1 = models.IntegerField()
    score2 = models.IntegerField()


class cyberaudit(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    OrgdetailsField = models.ForeignKey(OrgDetails, on_delete=models.CASCADE)
    categoryTwofield = models.ForeignKey(categoryTwo, on_delete=models.CASCADE)



    pass #Don't know field types yet



