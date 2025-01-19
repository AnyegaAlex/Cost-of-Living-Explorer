import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GDPChart from '../components/charts/GDPChart';
import DataTable from '../components/common/DataTable';
import { SUPPORTED_COUNTRIES } from '../constants/countries';

const ComparisonPage = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([SUPPORTED_COUNTRIES[0], SUPPORTED_COUNTRIES[1]]);

  useEffect(() => {
    // Fetch data for selected countries
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          selectedCountries.map((country) =>
            axios.get(`${process.env.REACT_APP_API_URL}/country/${country.name}`)
          )
        );
        setCountryData(responses.map((response) => response.data));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [selectedCountries]);

  const handleCountryChange = (index, country) => {
    const updatedCountries = [...selectedCountries];
    updatedCountries[index] = country;
    setSelectedCountries(updatedCountries);
  };

  return (
    <div>
      <h1 className="text-xl">Compare Countries</h1>
      <div className="mt-4">
        {SUPPORTED_COUNTRIES.map((country, index) => (
          <select
            key={country.code}
            onChange={(e) => handleCountryChange(index, SUPPORTED_COUNTRIES.find(c => c.name === e.target.value))}
            value={selectedCountries[index].name}
          >
            {SUPPORTED_COUNTRIES.map((opt) => (
              <option key={opt.code} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="mt-4">
        {countryData.length > 0 && <GDPChart data={countryData} />}
        <DataTable data={countryData[0]?.indicators || []} />
      </div>
    </div>
  );
};

export default ComparisonPage;
