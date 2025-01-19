import pytest
from api.services.trading_economics import fetch_country_data, ApiError

@pytest.mark.django_db
def test_fetch_country_data(mocker):
    mock_data = {"GDP": 500000, "Inflation": 2.3}
    country_code = "SE"

    # Mock the API call
    mocker.patch("requests.get", return_value=mocker.Mock(status_code=200, json=lambda: mock_data))

    data = fetch_country_data(country_code)
    assert data == mock_data

@pytest.mark.django_db
def test_fetch_country_data_error(mocker):
    country_code = "SE"

    # Mock a failed API response
    mocker.patch("requests.get", side_effect=Exception("Network error"))

    with pytest.raises(ApiError) as excinfo:
        fetch_country_data(country_code)
    assert "Failed to fetch data" in str(excinfo.value)
