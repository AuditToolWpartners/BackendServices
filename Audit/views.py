# from django.shortcuts import render

# Create your views here.
from re import S
from httplib2 import Response
import jwt
from django.http import JsonResponse
from django.core import serializers
from rest_framework.views import APIView
from django.http import HttpResponse
from .models import (Category, Question, Answer)
from django.contrib.auth.models import User
from .serializers import(QuestionSender, AnswerSerial, QuestionNistSerializer)
from rest_framework.response import Response as Rs

class questionRecive(APIView):
    QuestionSender = QuestionSender

    @staticmethod
    
    def authcall(request):
        token = request.COOKIES.get('jwt')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])
        print(user)
        return user

    def post(self, request):
        try:
            userid = self.authcall(request)
        except:
            return HttpResponse('Client not Logged in')

        QuestionSenderInstance = self.QuestionSender(data=request.data)

        if QuestionSenderInstance.is_valid():
            questionnumber = QuestionSenderInstance.validated_data.get('QuestionNumber')
            CategoryRequested=QuestionSenderInstance.validated_data.get('Category')
            AnswerQuery = Answer.objects.filter(userLink=userid)



            print(QuestionSenderInstance.validated_data.get('Category'))
            try:
                CategoryID = Category.objects.get(CategoryTitle=CategoryRequested)
            except:
                Response = HttpResponse("Invalid Category", content_type="text/plain")
                return Response


            for answers in AnswerQuery.iterator():
                print(f'{answers} HERE THING')
                questionid = QuestionSenderInstance.validated_data.get('QuestionNumber')
                QuestionFound = Question.objects.values()
                QuestionFoundnum = QuestionFound[questionnumber]
                questiontwo = QuestionFoundnum["id"]
                print(f'{answers.Question.id} adsad')
                print(questionid)
                if answers.Question.id == questiontwo:
                    print(answers, 'HEREHERE')
                    data = serializers.serialize("json", Answer.objects.filter(pk=answers.id))
                    print('wrfmsdm')
                    data2 = serializers.serialize("json", Question.objects.filter(pk=questionid))
                    return HttpResponse(data + "," + data2)


            try:
                QuestionObject = Question.objects.filter(Category=CategoryID)
                print(QuestionObject)
            except:
                Response = HttpResponse("No QUestions Within Category", content_type="text/plain")
                return Response

            print(questionnumber)

            #SelectedQuestion = Question.objects.filter(pk=questionnumber) #change this to fitler, switch to pk
            print('dfsdfsdfsdfsdf')
            try:

                Squestion = serializers.serialize("json", QuestionObject[questionnumber-1:questionnumber])
                return HttpResponse(Squestion)
            except:
                Response = HttpResponse('No question in range of index')
                return Response
        else:
            Response = HttpResponse('Invalid Request')
            return Response


class CategoryRecive(APIView):

    def post(self, request):
        AllCategory = Category.objects.all()
        SCategory = serializers.serialize("json", AllCategory)
        return HttpResponse(SCategory)

class AnswerSend(APIView):
    AnswerSerial = AnswerSerial

    @staticmethod
    
    def authcall(request):
        token = request.COOKIES.get('jwt')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])
        print(user)
        return user

    def post(self, request):
        try:
            userid = self.authcall(request)
        except:
            return HttpResponse("Client not Logged in", content_type="text/plain")
        answerinstance = self.AnswerSerial(data=request.data)

        if answerinstance.is_valid():
            AnswerInput = answerinstance.validated_data.get('AnswerInput')
            Question = answerinstance.validated_data.get('Question')
            print('completed')
        else:
            Response = HttpResponse('Gsfsdf')
            return Response
        try:
            model = Answer(AnswerInput=AnswerInput, Question=Question, userLink=userid)
            model.save()
            return HttpResponse("Model Saved")
        except Exception as e:
            print(e)
            return HttpResponse(e)
        print('here')
        Response = HttpResponse('Ffsdfsdf')
        return Response

        
class UserScore(APIView):
    NistSerial = QuestionNistSerializer
    @staticmethod
    def authcall(request):
        token = request.COOKIES.get('jwt')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])
        print(user)
        return user


    def post(self, request):
        try:

            userid = self.authcall(request)
        except:
            return HttpResponse("Client not Logged in", content_type="text/plain")
        ScoreTotal = 0
        NistSerial = self.NistSerial(data=request.data)
        if NistSerial.is_valid():
            QuestionNist = NistSerial.validated_data.get('QuestionNist')

        else:
            return HttpResponse('Invalid')

        #Fitler answers first by user ID
        #Then filter by answer.Question.QuestionNist - Get Catigory from Request
        UsersAnswers = Answer.objects.filter(userLink=userid)

        for answer in UsersAnswers.iterator():
            if answer.Question.QuestionNist == QuestionNist:
                ScoreTotal +=  answer.Question.questionScore


        Response = HttpResponse(ScoreTotal)
        return Response
