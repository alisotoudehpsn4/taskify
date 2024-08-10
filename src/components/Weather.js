import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Fetch the weather data
        try {
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1554998d8fba58af04b3db258591c4d9&units=metric`
          );
          setWeather(weatherResponse.data);

          // Fetch the location data using the latitude and longitude
          const locationResponse = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          setLocation(locationResponse.data);
        } catch (error) {
          setError("Unable to fetch weather and location data.");
        }
      }, () => {
        setError("Geolocation not supported or permission denied.");
      });
    } else {
      setError("Geolocation not supported by your browser.");
    }
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!weather || !location) {
    return <p>Loading weather and location...</p>;
  }

  return (
    <div style={weatherStyle}>
      <h2>Current Weather in {location.city}, {location.countryName}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

const weatherStyle = {
  backgroundColor: '#1A1A40',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
};

export default Weather;
