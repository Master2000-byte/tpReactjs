from rest_framework import serializers
from .models import Employee, Profile

class EmployeeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id','matricule' , 'name' ,'password', 'email', 'picture')


class ProfileSerializers(serializers.ModelSerializer):
    employee = EmployeeSerializers(many=False, read_only=True)
    class Meta:
        model = Profile
        fields = "__all__"
     