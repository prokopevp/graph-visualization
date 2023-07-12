FROM python:3.10.6-slim-buster

ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .

ADD docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod a+x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD gunicorn --bind 0.0.0.0:8000 dj.wsgi