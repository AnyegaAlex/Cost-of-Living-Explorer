# backend/api/services.py
import os
import requests
from dotenv import load_dotenv

load_dotenv()

class TradingEconomicsService:
    def __init__(self):
        self.api_key = os.getenv('TRADING_ECONOMICS_API_KEY')
        self.base_url = 'https://api.tradingeconomics.com/v1'

    def get_indicators(self, country):
        """Get cost of living indicators for a country"""
        endpoints = [
            f'/country/{country}/indicator/inflation',
            f'/country/{country}/indicator/gdppercapita',
            f'/country/{country}/indicator/wages'
        ]
        
        data = {}
        for endpoint in endpoints:
            response = requests.get(
                f'{self.base_url}{endpoint}',
                headers={'Authorization': f'Client {self.api_key}'}
            )
            if response.status_code == 200:
                data[endpoint.split('/')[-1]] = response.json()
        return data