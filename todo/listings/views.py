from django.shortcuts import render
from .models import todos
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token


def index(request):
    return HttpResponse("<h1>Todo List App Running Lil Bro</h1>")

def show_todo(request):
    # Fetch all todos and convert them to a list
    alltodo = list(todos.find())
    formatted_todos = "<br>".join([str(todo) for todo in alltodo])  # Format for display
    return HttpResponse(formatted_todos)

def add_todo(request):
    record = {
        "title": "wash dishes",
        "description": "Wash all the dishes by 2pm",
        "checked": False  # Use boolean instead of string
    }
    todos.insert_one(record)
    return HttpResponse("New todo added")

def delete_todo(request):
    filtered = {"title": "wash dishes"}
    todos.delete_one(filtered)
    return HttpResponse("Deleted")


def csrf_token_view(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})