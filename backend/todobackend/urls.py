from django.urls import path
from .views import SubmitFormView, AddTODO, TaskList

urlpatterns = [
    path('add/', AddTODO.as_view(), name='submit-form'),
    path('tasks/', TaskList.as_view(), name='task-list'),
]
