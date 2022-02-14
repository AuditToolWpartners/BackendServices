
from django.db import models
from django.db import models
from django.contrib.auth.models import User
QuestionTypes = (
    ("YesNo", "Yes Or No"),
    ("YesNoContent","Yes Or No + Content"),
    ("Content","Content Only"),
)
NistChoices = (
    ()
)


class Category(models.Model): #Might Change later
    CategoryTitle = models.CharField(max_length=12)

class Question(models.Model):
    questionText = models.CharField(max_length=50)
    QuestionType = models.CharField(choices=QuestionTypes, max_length=20)
    questionScore = models.IntegerField()
    QuestionNist = models.CharField(max_length=20)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE, db_column='Category', related_name='Category_id')



class Answer(models.Model):
    AnswerInput = models.TextField() #Frontend will give PK
    #ScoreValue = models.TextField(max_length=3)
    Question = models.ForeignKey(Question, on_delete=models.CASCADE)
    userLink = models.ForeignKey(User, on_delete=models.CASCADE)





