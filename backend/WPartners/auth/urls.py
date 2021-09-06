
from django.contrib import admin
from django.urls import path, include
from .views import createuser, LoginUser, Viewthemall

urlpatterns = [
    path('createuser/', createuser.as_view()),
    #path('login/', LoginUser.as_view())
    path('view/', Viewthemall.as_view(),)
]
