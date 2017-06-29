from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=512)
    start_time = models.DateTimeField('start date')
    end_time = models.DateTimeField('end date')
