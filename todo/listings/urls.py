from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_todo, name='show_todo'),
    path('add/', views.add_todo, name='add_todo'),
    path('delete/', views.delete_todo, name='delete_todo'),  # Added trailing slash
    path('csrf-token/', views.csrf_token_view, name='csrf_token'),

]
