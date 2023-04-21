import React from "react";
import getWeather, { parseWeatherData } from "../utils/weatherApi";

export const tempUnits = {
  temps: {
    F: (getWeather.weather.temperature.F = `${Math.round(
      parseWeatherData.main.temp
    )}°F`),
    C: (getWeather.weather.temperature.C = `${Math.round(
      ((parseWeatherData.main.temp - 32) * 5) / 9
    )}°C`),
  },
};

export const CurrentTempUnitContext = React.createContext();
