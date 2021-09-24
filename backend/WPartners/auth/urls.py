
from django.contrib import admin
from django.urls import path, include
from .views import createuser, Viewthemall, loginuser, signedin, EmailVerify

urlpatterns = [
    path('createuser/', createuser.as_view()),
    path('login/', loginuser.as_view()),
    path('view/', Viewthemall.as_view()),
    path('signedin/',signedin.as_view()),
    path('emailverify/<str:userid>', EmailVerify.as_view())
]
