from django.urls import path
from . import views
from .views import GetCategoriesAPIView, PickArtistAPIView
urlpatterns = [
    path('main', GetCategoriesAPIView.as_view(), name='home'),
    path('daily_pick/<slug:slug>', PickArtistAPIView.as_view() )
]