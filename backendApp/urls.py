"""backendApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from todo import views
from jobs.views import EmployeeView , ProfileView , Hello

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')
router.register(r'employee', EmployeeView)
router.register(r'profile' , ProfileView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('hello/', Hello.as_view(), name='hello'),
    path('api-token/', obtain_auth_token , name='api-token')
]
