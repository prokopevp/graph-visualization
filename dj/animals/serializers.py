from rest_framework import serializers

from animals.models import Animals, Relations


class AnimalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animals
        fields = ('__all__')

class RelationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relations
        fields = ('target', 'source')