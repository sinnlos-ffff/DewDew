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

auth_manager = SpotifyClientCredentials(
        client_id=os.environ.get('SPOTIPY_CLIENT_ID'), 
        client_secret=os.environ.get('SPOTIPY_CLIENT_SECRET'),
        )
sp = spotipy.Spotify(auth_manager=auth_manager)

# Create your views here.

class GetCategoriesAPIView(APIView):
    def get(self, request):
        categories = sp.categories(locale="KR")
        return Response({
            'categories': categories
        })

class PickArtistAPIView(APIView):
    def get(self, request, slug):
        if slug == 'new_release':
            releases = sp.new_releases(country='KR', limit=50)
            
            pick_num = random.randint(0,49)

            artists= releases["albums"]["items"]
            
            pick = artists[pick_num]
            new_track = sp.search(q={
                "album":pick["name"],
                "artist":pick["artists"][0]["name"]
            })["tracks"]["items"][0]
            artist_url = artists[pick_num]["artists"][0]["uri"]
        
            artist_pick = sp.artist(artist_url)
            top_tracks = sp.artist_top_tracks(artist_id=artist_url, country='KR')
            return Response({
                'artist': artist_pick,
                'top_tracks': top_tracks,
                'new_track': new_track,
            })
    
