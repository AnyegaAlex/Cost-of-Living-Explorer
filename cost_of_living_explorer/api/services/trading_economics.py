import requests
import os
from api.utils.cache_utils import cache_data, get_cached_data

class ApiError(Exception):
    pass

API_BASE_URL = "https://api.tradingeconomics.com"

def fetch_country_data(country_code):
    """
    Fetch economic data for a specific country.
    """
    cache_key = f"country_data_{country_code}"
    cached_data = get_cached_data(cache_key)

    if cached_data:
        return cached_data

    try:
        api_key = os.getenv("TRADING_ECONOMICS_API_KEY")
        if not api_key:
            raise ApiError("API key not found in environment variables.")

        response = requests.get(
            f"{API_BASE_URL}/country/{country_code}",
            params={"c": api_key},
            timeout=10
        )
        response.raise_for_status()

        data = response.json()
        cache_data(cache_key, data, timeout=3600)  # Cache for 1 hour
        return data

    except requests.RequestException as e:
        raise ApiError(f"Failed to fetch data: {str(e)}")
