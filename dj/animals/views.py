from django.shortcuts import get_object_or_404, render
from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework.response import Response

from animals.serializers import AnimalsSerializer, RelationsSerializer
from animals.models import Animals, Relations


@api_view(['GET'])
def get_animals(request):
    animals = Animals.objects.all()

    serializer = AnimalsSerializer(animals, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def get_relations(request):
    relations = Relations.objects.all()

    serializer = RelationsSerializer(relations, many=True)

    return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def get_one_animal(request, id):
    animal = get_object_or_404(Animals, id=id)

    if request.method == 'GET':
        upper = []
        upper_ids = list(map(lambda rel: rel.source, Relations.objects.filter(target=id)))
        upper_animals = Animals.objects.filter(id__in=upper_ids)
        for anim in upper_animals:
            serializer = AnimalsSerializer(anim)
            upper.append(serializer.data)

        lower = []
        lower_ids = list(map(lambda rel: rel.target, Relations.objects.filter(source=id)))
        lower_animals = Animals.objects.filter(id__in=lower_ids)
        for anim in lower_animals:
            serializer = AnimalsSerializer(anim)
            lower.append(serializer.data)

        serializer = AnimalsSerializer(animal)
        data = serializer.data

        data['upper'] = upper
        data['lower'] = lower

        return Response(data)
    elif request.method == 'DELETE':
        target_Q = Q(target=id)
        source_Q = Q(source=id)

        Relations.objects.filter(target_Q | source_Q).delete()

        animal.delete()

        return Response(status=200)
