from django.urls import path
from . import views
from .views import PickArtistAPIView
urlpatterns = [
    path('main', views.index, name='home'),
    path('daily_pick', PickArtistAPIView.as_view() )
]