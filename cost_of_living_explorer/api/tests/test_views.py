import pytest
from django.urls import reverse
from api.constants.countries import SUPPORTED_COUNTRIES

@pytest.mark.django_db
def test_get_country_data(client, mocker):
    country_name = "Sweden"
    mock_data = {"GDP": 500000, "Inflation": 2.3}

    # Mock the API service to avoid real API calls
    mocker.patch("api.services.trading_economics.fetch_country_data", return_value=mock_data)

    response = client.get(reverse("get_country_data", args=[country_name]))
    assert response.status_code == 200
    assert response.json() == mock_data

@pytest.mark.django_db
def test_unsupported_country(client):
    response = client.get(reverse("get_country_data", args=["Unsupported"]))
    assert response.status_code == 400
    assert response.json() == {"error": "Country not supported"}

@pytest.mark.django_db
def test_api_error_handling(client, mocker):
    country_name = "Sweden"

    # Mock an API error
    mocker.patch("api.services.trading_economics.fetch_country_data", side_effect=Exception("API error"))

    response = client.get(reverse("get_country_data", args=[country_name]))
    assert response.status_code == 500
    assert "error" in response.json()
