from django.contrib import admin
from .models import Question, Answer, Category
admin.site.register(Question)
admin.site.register(Category)
admin.site.register(Answer)
