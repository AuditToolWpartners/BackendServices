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

    #Use Indivitidual Serialziers per catiogory. Instead of request.data like in view rn, give each serializer a correct objrcts. use request.data.get('OBJECT NAME') and then pass it too the correct seralizer. Then save the serializer data to correct model (auth user first)