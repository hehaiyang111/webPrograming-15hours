from django.urls import path
from . import views
# app_name = task
urlpatterns = [
    path('',view=views.index,name='index'),
    path('result',view=views.result,name='result')
]