from django.shortcuts import render
from django import forms
# Create your views here.
class MyFormName(forms.Form):
    myForm = forms.CharField(label='按钮', max_length=4)


def index(request):
    return render(request,'task/index.html', {
        'form' : MyFormName
    })

def result(request):
    return render(request,'task/result.html')