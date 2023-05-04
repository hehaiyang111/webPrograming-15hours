from django.shortcuts import render
# Create your views here.
def index(request):
    a = ['hi','L', 'X', 'Y']
    return render(request, 'csstemple/index.html', {
        'content' : a
    })

def add(request):
    return render(request, 'csstemple/add.html')