from rest_framework import serializers
from .models import OrgDetails

class OrgDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrgDetails
        fields = ('totalAvailableScore','score1','score2')
class CategoryTwoSerialzer(serializers.ModelSerializer):

    class Meta:
        model = OrgDetails
        fields = ('totalAvailableScore','score1','score2')
