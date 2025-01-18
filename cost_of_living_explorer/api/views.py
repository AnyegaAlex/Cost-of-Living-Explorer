import requests
from django.http import JsonResponse

API_BASE_URL = "https://api.tradingeconomics.com/"
API_KEY = ""

def get_country_indicators(request, country, indicator):
    url = f"{API_BASE_URL}historical/country/{country}/indicator/{indicator}?c={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        return JsonResponse(response.json(), safe=False)
    return JsonResponse({'error': 'Unable to fetch data'}, status=500)
