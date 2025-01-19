from django.urls import path
from api.views import get_country_data
from . import views

urlpatterns = [
    path('fetch-country-data/<str:country>/', views.fetch_country_data, name='fetch_country_data'),
]
