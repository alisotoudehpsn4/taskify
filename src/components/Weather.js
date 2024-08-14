/**
 * Imports React and necessary hooks for managing state and side effects.
 */
import React, { useState, useEffect } from 'react';

/**
 * Imports Axios for making HTTP requests.
 */
import axios from 'axios';

/**
 * Defines the Weather component.
 */
const Weather = () => {
  /**
   * useState hooks to manage weather, location, and error states.
   */
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  /**
   * useEffect hook to fetch weather and location data when the component mounts.
   */
  useEffect(() => {
    if (navigator.geolocation) {
      /**
       * Gets the user's current position using the Geolocation API.
       */
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        /**
         * Tries to fetch weather and location data using Axios.
         */
        try {
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1554998d8fba58af04b3db258591c4d9&units=metric`
          );
          setWeather(weatherResponse.data);

          const locationResponse = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          setLocation(locationResponse.data);
        } catch (error) {
          /**
           * Handles errors in fetching data.
           */
          setError("Unable to fetch weather and location data.");
        }
      }, () => {
        setError("Geolocation not supported or permission denied.");
      });
    } else {
      setError("Geolocation not supported by your browser.");
    }
  }, []);

  /**
   * Returns an error message if there's an error.
   */
  if (error) {
    return <p>{error}</p>;
  }

  /**
   * Returns a loading message if data hasn't been fetched yet.
   */
  if (!weather || !location) {
    return <p>Loading weather and location...</p>;
  }

  /**
   * Renders the weather and location information.
   */
  return (
    <div style={weatherStyle}>
      <h2>Current Weather in {location.city}, {location.countryName}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

/**
 * Defines inline styles for the weather component.
 */
const weatherStyle = {
  backgroundColor: '#1A1A40',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
};

/**
 * Exports the Weather component as the default export.
 */
export default Weather;
