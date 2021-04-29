from django.shortcuts import render
from rest_framework import viewsets
from .models import Employee, Profile
from .serializers import EmployeeSerializers, ProfileSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class EmployeeView(viewsets.ModelViewSet):
    serializer_class =  EmployeeSerializers
    queryset = Employee.objects.all()

class ProfileView(viewsets.ModelViewSet):
    serializer_class =  ProfileSerializers
    queryset = Profile.objects.all()


class Hello(APIView):
    persmision_classes = (IsAuthenticated)
    def get(self, request):
        content = {'message': 'helo to u , we use token'}
        return Response(content)