
from django.contrib import admin
from django.urls import path, include
from .views import createuser, Viewthemall, loginuser

urlpatterns = [
    path('createuser/', createuser.as_view()),
    path('login/', loginuser.as_view()),
    path('view/', Viewthemall.as_view())
]
