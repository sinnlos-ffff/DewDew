from django.urls import path
from . import views
from .views import PickArtistNewReleaseAPIView
urlpatterns = [
    path('main', views.index, name='home'),
    path('daily_pick/<slug:slug>', PickArtistNewReleaseAPIView.as_view() )
]