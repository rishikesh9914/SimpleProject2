from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from app4.models import RegistrationModel

# Create your views here.
def save_to_db(request):
    RegistrationModel(name=request.POST.get("t1"),contact=request.POST.get("t2"),email=request.POST.get("t3"),password=request.POST.get("t4")).save()
    return HttpResponse("Data is saved")

@csrf_exempt
def validate(request):
    try:
        RegistrationModel.objects.get(contact=request.POST.get("cno"))
        return JsonResponse({"result":True})
    except RegistrationModel.DoesNotExist:
        return JsonResponse({"result":False})

@csrf_exempt
def validate_mail(request):
    try:
        RegistrationModel.objects.get(email=request.POST.get("mailid"))
        return JsonResponse({"result": True})
    except RegistrationModel.DoesNotExist:
        return JsonResponse({"result": False})
