from .base import *
import os

DEBUG=False

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOWED_ORIGINS = ['http://localhost:3000']
ALLOWED_HOSTS=["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': 'postgres',
        'PORT': '5432',
    }
}