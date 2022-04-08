from django.urls import path
from . import views
urlpatterns = [
    path('main', views.index, name='home'),
    path('generate', views.generate_playlist)
]