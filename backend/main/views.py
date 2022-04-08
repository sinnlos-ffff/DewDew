from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os, django
from dotenv import load_dotenv

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()

load_dotenv()

SPOTIPY_REDIRECT_URI = os.getenv('SPOTIPY_REDIRECT_URI')

# Create your views here.

def index(request):
    return HttpResponse('hello')

class PickArtistAPIView(APIView):
    def get(self, request):
        auth_manager = SpotifyClientCredentials(
        client_id=os.environ.get('SPOTIPY_CLIENT_ID'), 
        client_secret=os.environ.get('SPOTIPY_CLIENT_SECRET'),
        )
        sp = spotipy.Spotify(auth_manager=auth_manager)

        playlists = sp.user_playlists('spotify')

        return Response({
            'playlist':playlists
        })
