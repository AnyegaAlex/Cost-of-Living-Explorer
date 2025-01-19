from django.test import override_settings
from api.utils.cache_utils import cache_data, get_cached_data

@override_settings(CACHES={
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': '',
    }
})
def test_cache_utils():
    cache_key = "test_key"
    test_data = {"GDP": 500000, "Inflation": 2.3}

    # Test caching data
    cache_data(cache_key, test_data, timeout=10)
    cached_data = get_cached_data(cache_key)

    assert cached_data == test_data
