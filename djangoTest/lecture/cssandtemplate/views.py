from django.shortcuts import render
from datetime import date
# Create your views here.
def index(request):
    today = date.today()
    return render(request, 'index.html', {
        'time': today == '2024-01-01'
    })