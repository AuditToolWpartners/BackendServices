
from django.urls import path, include
from .views import questionRecive, CategoryRecive

urlpatterns = [
    path('QuestionsRecieve/', questionRecive.as_view()),
    path('CategoryRecieve/', CategoryRecive.as_view()),

]
