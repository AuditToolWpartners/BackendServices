import datetime

import jwt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CreateUserSerial, loginuser, UserDetails
from .token import Decoder
from .token import URLCreator


class Viewthemall(generics.ListAPIView): #This is a debug view to show all Views within the Auth App
    queryset = User.objects.all()
    serializer_class = CreateUserSerial


class createuser(APIView):
    serializer_class = CreateUserSerial

    def post(self, request):
        serialzer = self.serializer_class(data=request.data)

        if serialzer.is_valid():
            username = serialzer.data.get('username')
            password = serialzer.data.get('password')
            print('valid')
            user = User.objects.create_user(username=username, password=password)
            user.is_active = False
            emailurl = URLCreator(f'{user.id}')
            return HttpResponse(f"USER CREATED {emailurl}", content_type="text/plain")
        else:
            return HttpResponse("USER NOT CREATED", content_type="text/plain", status=400)


class loginuser(APIView):
    serializer_class = loginuser

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:

                payload = {

                    'id': user.id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                    'iat': datetime.datetime.utcnow()
                }
                token = jwt.encode(payload, 'secret', algorithm='HS256')
                response = Response()
                response.set_cookie(key='jwt', value=token, httponly=False)
                response.data = {
                    'jwt': token
                }
                return response


            else:
                return HttpResponse("NO USER WITH THOSE DETAILS", content_type="text/plain", status=403)
        else:
            return HttpResponse("BAD DATA", content_type="text/plain", status=400)


class signedin(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        print(f'this is token: {token}')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])
        Sdata = UserDetails(user).data
        print(Sdata)  # Edited Lines
        return Response(Sdata)
        # Do whatever past here TEST CODE ON WIN PC


class EmailVerify(APIView):

    @staticmethod
    def get(request, userid):
        try:
            user = User.objects.get(id=Decoder(userid))
            user.is_active = True
            return Response('Account activated')
        # eslint-disable-next-line
        except:
            return Response('Failed')

# Change
