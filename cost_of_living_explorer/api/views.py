from django.http import JsonResponse
from api.constants.countries import SUPPORTED_COUNTRIES
from api.services.trading_economics import fetch_country_data, ApiError
import requests
from django.conf import settings


def get_country_data(request, country_name):
    """
    Retrieve economic data for a specific country.
    """
    country = SUPPORTED_COUNTRIES.get(country_name)
    if not country:
        return JsonResponse({"error": "Country not supported"}, status=400)

    try:
        data = fetch_country_data(country["code"])
        return JsonResponse(data, safe=False)

    except ApiError as e:
        return JsonResponse({"error": str(e)}, status=500)

#Create a new view function to forward the request to the Trading Economics API:
def fetch_country_data(request, country):
    api_url = f'https://api.tradingeconomics.com/v1/country/{country}'
    api_key = settings.TRADE_ECONOMICS_API_KEY  # We'll store the key in settings
    try:
        response = requests.get(api_url, params={'apiKey': api_key})
        if response.status_code == 200:
            return JsonResponse(response.json())
        else:
            return JsonResponse({'error': 'Failed to fetch data from Trading Economics API'}, status=500)
    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': f'Error fetching data: {str(e)}'}, status=500)
