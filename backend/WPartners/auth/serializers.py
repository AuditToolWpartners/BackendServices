from rest_framework import serializers
from django.contrib.auth.models import User

class CreateUserSerial(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'password')

class LoginUser(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','password')
