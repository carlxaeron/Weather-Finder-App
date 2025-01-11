import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      throw new Error(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error. Please try again.');
    } else {
      // Something else happened while setting up the request
      throw new Error('An unexpected error occurred.');
    }
  }
};
