
from django.urls import path, include
from .views import cyberauditview

urlpatterns = [
    path('cyberaudit/', cyberauditview.as_view()),

]
