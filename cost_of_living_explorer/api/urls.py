from django.urls import path
from . import views

urlpatterns = [
    path('api/history/<str:country>/<str:indicator>/', views.get_country_indicators, name='country_indicators'),
]
