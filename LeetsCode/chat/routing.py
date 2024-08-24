# routing.py: This will route the WebSocket connections to the consumers
from django.urls import path , include
from chat.consumers import ChatConsumer


websocket_urlpatterns = [
    path("" , ChatConsumer.as_asgi()) , 
] 