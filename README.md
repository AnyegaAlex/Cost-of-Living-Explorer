
# Cost of Living Explorer

The Cost of Living Explorer is a web application that compares the cost of living in various countries using economic indicators such as inflation, currency value, and wage data. This project uses Django for the backend and React for the frontend. The application fetches data from the Trading Economics API to provide insights into the economic situation of supported countries.

##
## Features

- Interactive Map: Visualize countries on a map with key indicators.
- Country Comparison: Compare the economic indicators of two or more countries.
- Charts: View trends in economic data using dynamic line charts.
- Tables: Display detailed economic data in a tabular format.
- Free Tier Limitations: Only supports Sweden, Mexico, New Zealand, and Thailand for free-tier API users.

##
## Tech Stack

**Frontend:** React, React Router, Axios, Chart.js, Leaflet (for map integration)

**Backend:** Django, Django REST Framework

**Other Tools:** Vite (for React build system), Git (for version control)

##
## Project Setup
**Backend Setup (Django)**
1. Create a virtual environment:
```bash
python -m venv env
source env/bin/activate  
*On Windows, use `env\Scripts\activate`
```
2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. pip install -r requirements.txt
```bash
python manage.py runserver
```
4. Run the Django development server:
```bash
TRADING_ECONOMICS_API_KEY=your_api_key_here
```
**Frontend Setup (React)**
1. Navigate to the frontend directory:
```bash
cd cost-of-living-frontend
```
2. cd cost-of-living-frontend
```bash
npm install
```
3. Install dependencies:
```bash
npm run dev
```
##

## File Structure
**Backend (Django)**
```
cost_of_living_explorer/
├── manage.py          # Django management script
├── cost_of_living_explorer/
│   └── settings.py    # Project settings
│   └── urls.py        # Project URL configurations
└── api/
    └── views.py         # API endpoints
    └── models.py        # Database models
    └── serializers.py   # Data serializers
```
##

**Frontend (React)**
```
cost-of-living-frontend/
├── src/
│   └── components/
│       └── CountrySelector.jsx  # Dropdown for country selection
│       └── IndicatorChart.jsx   # Chart component for indicators
│       └── IndicatorTable.jsx   # Table component for indicators
│       └── MapComponent.jsx     # Map visualization component
│   └── App.jsx                # Main React app

```
##
## Deployment

**Backend**
1. Configure environment variables for production.
2. Use a WSGI server like Gunicorn to serve the Django app.
3. Set up static files for production.

#

**Frontend**

1. Build the React app:
```bash
  npm run build
```
2. Serve the static files using a service like Nginx.

##
## API Reference

The project uses the Trading Economics API.

1. Signup for an account: Trading Economics Developer

2. Use the provided API key to authenticate requests.


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Example of fetching data:

```http
axios
.get(`https://api.tradingeconomics.com/country/${country}?c=YOUR_API_KEY`)
.then((response) => console.log(response.data));
```
##





## Contributing

1. Fork the repository.

2. Create a new branch:
```bash
  git checkout -b feature-name
```

3. Commit your changes:
```bash
  git commit -m "Add new feature"
```

4. Push to the branch:
```bash
 git push origin feature-name
```
5. Submit a pull request.
#

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

#
## License

[MIT](https://choosealicense.com/licenses/mit/)

