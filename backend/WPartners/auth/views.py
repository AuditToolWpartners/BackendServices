from django.http.response import HttpResponseBadRequest
from django.shortcuts import render
import requests
from rest_framework import generics
from rest_framework.views import APIView
from requests import Response
from http import HTTPStatus as status
from django.contrib.auth.models import User
from .serializers import CreateUserSerial, LoginUser
from django.contrib.auth import get_user_model
from django.http import HttpResponse

class Viewthemall(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerial

class createuser(APIView):
    serializer_class = CreateUserSerial

    def post(self, request):
        serialzer = self.serializer_class(data=request.data)


        if serialzer.is_valid():
            User = get_user_model()
            username = serialzer.data.get('username')
            password = serialzer.data.get('password')
            print('valid')
            user = User.objects.create_user(username=username, password=password)
            print('pedo')
            return HttpResponse("USER CREATED", content_type="text/plain")
        else:
            return HttpResponse("USER NOT CREATED", content_type="text/plain", status=400)

#class Login(APIView):
    #serializer_class = LoginUser

    #def post(self, request):
        #serializer = self.serializer_class(data=request.data)

        #if serializer.is_valid():
            #user = User.objects.filter(username=serializer.data.username).first()
            









