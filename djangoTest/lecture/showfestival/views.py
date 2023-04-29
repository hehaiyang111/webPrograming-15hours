from django.shortcuts import render
from datetime import date
# Create your views here.
def show(request):
    now = date.today()
    return render(request,'index.html',{
        'time': now == '2024-01-01'
    })
