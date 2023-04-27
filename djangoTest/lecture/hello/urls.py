from django.urls import path
from . import views


urlpatterns = [
    path('', view=views.index, name='index'),
    path('xinyiliu', view=views.xinyiliu, name='xinyiLiu'),
    # <str:name>：接受变量字符串变量name。 例如/hello/haiyang/every   ---------->  映射views中helloeveryone方法将every作为参数传入。
    path('haiyang/<str:name>', view=views.helloeveryone, name='helloeveryone'),
    path('xuanran', view=views.xuanran, name='xuanran'),
    path('chuanzhi/<str:name>', view=views.chuanzhi, name='chuanzhi'),

]
