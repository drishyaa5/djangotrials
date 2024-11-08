from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pymongo
from pymongo import MongoClient
from django.conf import settings

class SubmitFormView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Connect to MongoDB
        client = MongoClient(settings.MONGO_URI)
        db = client['your_database_name']
        collection = db['your_collection_name']

        # Insert the data into MongoDB
        form_data = {
            'name': name,
            'email': email,
            'message': message,
        }
        collection.insert_one(form_data)

        return Response({"message": "Data saved successfully!"}, status=status.HTTP_201_CREATED)
