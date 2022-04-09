from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os, django , json
import random
from dotenv import load_dotenv

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()

load_dotenv()

SPOTIPY_REDIRECT_URI = os.getenv('SPOTIPY_REDIRECT_URI')

# Create your views here.

def index(request):
    return HttpResponse('hello')

class PickArtistNewReleaseAPIView(APIView):
    def get(self, request, slug):
        auth_manager = SpotifyClientCredentials(
        client_id=os.environ.get('SPOTIPY_CLIENT_ID'), 
        client_secret=os.environ.get('SPOTIPY_CLIENT_SECRET'),
        )
        sp = spotipy.Spotify(auth_manager=auth_manager)

        if slug == 'new_release':

            releases = sp.new_releases(country='KR', limit=20)
            
            pick_num = random.randint(0,19)

            artists= releases["albums"]["items"]
            
            artist_url = artists[pick_num]["artists"][0]["uri"]
        
            artist_pick = sp.artist(artist_url)

        return Response({
            'artist': artist_pick
        })
