
FROM python

RUN groupadd -r django_user && useradd --no-log-init -r -g django_user django_user

WORKDIR /home/django_user

COPY middjango/ .

RUN chown django_user:django_user -R .

RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt

RUN pip install -r requirements.txt

USER django_user

EXPOSE 8000

CMD /home/django_user/manage.py migrate && gunicorn --bind 0.0.0.0:8000 middjango.wsgi

USER root
