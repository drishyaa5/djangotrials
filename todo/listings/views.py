from django.shortcuts import render
from .models import todos
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token



def index(request):
    return HttpResponse("<h1>Todo List App Running Lil Bro</h1>")

def show_todo(request):
    todo_list = list(todos.find())  # Convert cursor to list
    
    # Convert MongoDB ObjectId to string and prepare data for JSON response
    for todo in todo_list:
        todo['_id'] = str(todo['_id'])  # Convert ObjectId to string

    return JsonResponse(todo_list, safe=False)

def add_todo(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        record = {
            "title": data.get("title"),
            "description": data.get("description"),
            "checked": False
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