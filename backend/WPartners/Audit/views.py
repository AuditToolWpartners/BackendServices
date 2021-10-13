from django.shortcuts import render

# Create your views here.
import jwt
from rest_framework.views import APIView
from django.http import HttpResponse
from  .models import cyberaudit,OrgDetails, categoryTwo
from django.contrib.auth.models import User
from .serializers import OrgDetailsSerializer, CategoryTwoSerialzer



class cyberauditview(APIView):

    OrgDetailsSerialzer = OrgDetailsSerializer
    CategoryTwoSerializer = CategoryTwoSerialzer

    def post(self, request):
        print(f'{request.data} request')
        token = request.COOKIES.get('jwt')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])


        OrgDetailsSerializerInstance = self.OrgDetailsSerialzer(data=request.data['orgDetails'])
        if OrgDetailsSerializerInstance.is_valid():
            OrgDetailsModel = \
                OrgDetails(totalAvailableScore=
                           OrgDetailsSerializerInstance.data.get('totalAvailableScore'),
                           score1=OrgDetailsSerializerInstance.data.get('score1'),
                           score2=OrgDetailsSerializerInstance.data.get('score2'))
        #Add all different catorgies before creating cyberaudit
        CategoryTwoSerialzerInstance = self.CategoryTwoSerializer(data=request.data['categoryTwo'])
        if CategoryTwoSerialzerInstance.is_valid():
            CategoryTwoModel = \
                categoryTwo\
                    (totalAvailableScore=CategoryTwoSerialzerInstance.data.get('totalAvailableScore'),
                     score1=CategoryTwoSerialzerInstance.data.get('score1'),
                     score2=CategoryTwoSerialzerInstance.data.get('score2'))




        CyberAudit = cyberaudit(user=user, OrgdetailsField=OrgDetailsModel, categoryTwofield=CategoryTwoModel)

        print(user.cyberaudit.OrgdetailsField.score2)#works now do this for all the different models
        print(user.cyberaudit.categoryTwofield.score1)
        return HttpResponse(content='Wonderful')
        # Do whatever past here TEST CODE ON WIN PC


        #Create Cyberudit model before serialization of answer

