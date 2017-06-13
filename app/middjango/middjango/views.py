import json

from django.http import JsonResponse
from rest_framework import viewsets
import json
from . import models
from . import serializers

def api(request):
    return JsonResponse({'hello':'world'})

def events(request, event_id=None):
    return __generate_view__(models.Event, serializers.EventSerializer, event_id); 
    
def __generate_view__(model, serializer, model_id=None):
    if model_id == None:
        model_list = model.objects.all()
        return JsonResponse(serializer(model_list, many=True).data, safe=False)
    else:
        try:
            model_obj = model.objects.get(pk=model_id)
            return JsonResponse(serializer(model_obj, many=False).data, safe=False)
        except model.DoesNotExist:
            return 404
