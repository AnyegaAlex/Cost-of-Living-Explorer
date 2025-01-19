import React, { useState, useEffect } from "react";
import { SUPPORTED_COUNTRIES } from "./constants/countries";
import { fetchCountryData } from "./services/api";
import GDPChart from "./components/charts/GDPChart";
import DataTable from "./components/table/DataTable";

const CountryComparison = () => {
  const [country1, setCountry1] = useState("Sweden");
  const [country2, setCountry2] = useState("Mexico");
  const [country1Data, setCountry1Data] = useState({});
  const [country2Data, setCountry2Data] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchCountryData(country1);
      const data2 = await fetchCountryData(country2);
      setCountry1Data(data1);
      setCountry2Data(data2);
    };
    fetchData();
  }, [country1, country2]);

  return (
    <div>
      <div>
        <select onChange={(e) => setCountry1(e.target.value)} value={country1}>
          {Object.keys(SUPPORTED_COUNTRIES).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select onChange={(e) => setCountry2(e.target.value)} value={country2}>
          {Object.keys(SUPPORTED_COUNTRIES).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <GDPChart data={[country1Data, country2Data]} />
        <DataTable data={{ GDP: country1Data.GDP, Inflation: country1Data.Inflation }} />
      </div>
    </div>
  );
};

export default CountryComparison;
