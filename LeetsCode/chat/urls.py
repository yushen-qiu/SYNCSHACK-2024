# route the Django application to different views in the app



from django.contrib import admin
from django.urls import path, include
from . import views
from chat import views as chat_views
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
    path("", chat_views.chatPage, name="chat-page"),
]
