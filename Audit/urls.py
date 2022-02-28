
from django.urls import path, include
from .views import questionRecive, CategoryRecive, CategoryRecive, AnswerSend, UserScore

urlpatterns = [
    path('QuestionsRecieve/', questionRecive.as_view()),
    path('CategoryRecieve/', CategoryRecive.as_view()),
    path('AnswerSend/', AnswerSend.as_view()),
    path('NistCalulate/', UserScore.as_view()),


]
