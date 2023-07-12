#!/bin/bash -x

python3 manage.py makemigrations --settings=dj.settings.prod --noinput || exit 1
python3 manage.py migrate --settings=dj.settings.prod --noinput || exit 1
exec "$@"