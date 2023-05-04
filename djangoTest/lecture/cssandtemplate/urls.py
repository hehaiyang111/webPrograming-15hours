from django.urls import path
from . import views


urlpatterns = [
    path('', view=views.index, name='csstemplate'),
    path('add/', view=views.add, name='add'),
]