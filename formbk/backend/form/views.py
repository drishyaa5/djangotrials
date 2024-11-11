from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pymongo
from pymongo import MongoClient
from django.conf import settings

client = MongoClient(settings.MONGO_URI)
db = client['your_database_name']
collection = db['your_collection_name']

class SubmitFormView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Connect to MongoDB
        

        # Insert the data into MongoDB
        form_data = {
            'name': name,
            'email': email,
            'message': message,
        }
        collection.insert_one(form_data)

        return Response({"message": "Data saved successfully!"}, status=status.HTTP_201_CREATED)


class AddTODO(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        task = data.get('task')


        form_data ={
            "task": task
        }
                
        collection.insert_one(form_data)

        return Response({"message": "Data saved successfully!"}, status=status.HTTP_201_CREATED)


class TaskList(APIView):
    def get(self, request, *args, **kwargs):
        # Fetch tasks from the collection (exclude the _id field)
        tasks = list(collection.find({}, {"_id": 0, "task": 1}))
        return Response(tasks, status=status.HTTP_200_OK)