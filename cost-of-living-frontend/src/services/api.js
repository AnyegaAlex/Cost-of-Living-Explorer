// src/services/api.js

import axios from 'axios';

// API base URL (Django proxy)
const BASE_URL = 'http://localhost:8000/api/fetch-country-data';  // Django backend URL

// Named export for fetchCountryData function
export const fetchCountryData = async (country) => {
  try {
    const response = await axios.get(`${BASE_URL}/${country}`);
    return response.data; // Assuming the response is the country data
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw new Error("Error fetching country data");
  }
};
