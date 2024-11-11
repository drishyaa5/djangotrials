from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pymongo import MongoClient
from django.conf import settings

client = MongoClient(settings.MONGO_URI)
db = client['workouts']
collection = db['workout']

class SubmitWorkout(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        workout_name = data.get('workoutName')
        sets = data.get('sets')
        reps = data.get('reps')

        form_data = {
            'workout_name': workout_name,
            'sets': sets,
            'reps': reps,
        }

        collection.insert_one(form_data)

        return Response({"message": "New Workout Added"}, status=status.HTTP_201_CREATED)


class GetAllWorkout(APIView):
    def get(self, request, *args, **kwargs):
        workouts = list(collection.find({}, {"_id": 0}))
        return Response(workouts, status=status.HTTP_200_OK)