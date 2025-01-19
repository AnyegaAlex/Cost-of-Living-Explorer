// src/components/map/EconomicMap.jsx

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { fetchCountryData } from '../../services/api'; // Correct import for named export
import { LoadingSpinner } from '../common/LoadingSpinner'; // Assuming you have a loading spinner component

const EconomicMap = () => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const countries = [
    { name: 'Sweden', coords: [60.1282, 18.6435] },
    { name: 'Mexico', coords: [23.6345, -102.5528] },
    { name: 'New Zealand', coords: [-40.9006, 174.8860] },
    { name: 'Thailand', coords: [15.8700, 100.9925] },
  ];

  // Function to fetch country data and update state
  const fetchData = async (country) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCountryData(country);
      setCountryData(data);
    } catch (err) {
      setError('Error fetching data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial data fetch for the first country (Sweden)
    fetchData('Sweden');
  }, []);

  return (
    <div>
      <h2>Interactive Economic Map</h2>
      {loading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      <MapContainer center={new LatLng(60.1282, 18.6435)} zoom={3} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countries.map((country, index) => (
          <Marker key={index} position={country.coords}>
            <Popup>
              <div>
                <h4>{country.name}</h4>
                <button onClick={() => fetchData(country.name)}>View Data</button>
                {countryData && countryData.country === country.name && (
                  <div>
                    <p>GDP: {countryData.gdp}</p>
                    <p>Inflation: {countryData.inflation}</p>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EconomicMap;
