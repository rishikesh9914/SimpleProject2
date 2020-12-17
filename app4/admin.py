from django.contrib import admin

from .models import RegistrationModel

# Register your models here.
class AdminRegistrationModel(admin.ModelAdmin):
    list_display = ['number','name','contact','email','password']

admin.site.register(RegistrationModel)
