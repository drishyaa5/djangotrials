from rest_framework import serializers
from .models import todos  # Import your MongoDB model

class YourModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = todos
        fields = '__all__'  # or specify fields you want to include