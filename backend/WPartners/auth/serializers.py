from rest_framework import serializers
from django.contrib.auth.models import User

class CreateUserSerial(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'password')

class loginuser(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(max_length=32)

    

class Token(serializers.Serializer):
    token = serializers.CharField()

class UserDetails(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = '__all__'

    