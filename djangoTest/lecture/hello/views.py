from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

'''
1. 使用普通方法
2. 使用带参方法
'''
def index(request):
    return HttpResponse('hello111')

# 最好不要有大写
def xinyiliu(request):
    return HttpResponse('hello xinyi')

def helloeveryone(request,name):
    return HttpResponse(f"hello {name}")


'''
1. 使用render渲染方法,所渲染的html网页需要放置templates文件夹下。
'''
def xuanran(request):
    return render(request,'hello.html')


'''
1. 传值
'''
def chuanzhi(request,name):
    return render(request, 'chuanzhi.html', {
        "name": name
    })