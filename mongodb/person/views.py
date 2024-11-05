from django.shortcuts import render
from .models import person_collection
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h1>App is Running</h1>")

def add_person(request):
    records = {
        "first_name": "Drishya",
        "last_name": "Adhikari"
    }
    person_collection.insert_one(records)
    return HttpResponse("New person Addeddd")


def get_all_person(request):
    persons = person_collection.find()
    return HttpResponse(persons)

