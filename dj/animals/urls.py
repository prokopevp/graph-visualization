from django.urls import include, path
from .views import get_animals, get_relations, get_one_animal


urlpatterns = [
    path('animals/<int:id>', get_one_animal),
    path('animals', get_animals),
    path('relations', get_relations)
]