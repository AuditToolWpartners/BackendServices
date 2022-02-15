from dataclasses import field
from rest_framework import serializers
from .models import(Question, Answer)

class QuestionSerializer(serializers.ModelSerializer): #Unsed currently
    class Meta:
        model = Question
class QuestionSender(serializers.Serializer):
        Category = serializers.CharField(max_length=50)
        QuestionNumber = serializers.IntegerField()
        
class AnswerSerial(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('AnswerInput', 'Question')

class QuestionNistSerializer(serializers.Serializer):
    QuestionNist = serializers.CharField(max_length=30)