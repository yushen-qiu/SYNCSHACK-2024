"""
ASGI config for LeetsCode project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter , URLRouter
from chat import routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "LeetsCode.settings")

# application = get_asgi_application()

django_asgi_app = get_asgi_application()

application = ProtocolTypeRouter(
    {
        "http" : django_asgi_app , 
        "websocket" : AuthMiddlewareStack(
            URLRouter(
                routing.websocket_urlpatterns
            )    
        )
    }
)


# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ChatApp.settings")
# application = ProtocolTypeRouter({
#     "http": django_asgi_app,
#     # Just HTTP for now. (We can add other protocols later.)
# })

ASGI_APPLICATION = 'LeetsCode.asgi.application'


