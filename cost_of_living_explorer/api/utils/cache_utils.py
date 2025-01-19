from django.core.cache import cache

def cache_data(key, data, timeout=300):
    """
    Cache data with a specific key and timeout.
    """
    cache.set(key, data, timeout)

def get_cached_data(key):
    """
    Retrieve cached data by key.
    """
    return cache.get(key)
