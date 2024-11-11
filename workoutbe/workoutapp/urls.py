from django.urls import path
from .views import SubmitWorkout, GetAllWorkout

urlpatterns = [
    path('workoutadd', SubmitWorkout.as_view(), name='submit-workout'),
    path('getallWorkout', GetAllWorkout.as_view(), name="getallworkouts")
]
