import React from "react";
import App from "../components/App/App";
import getWeather, { parseWeatherData } from "../utils/weatherApi";

// export const tempUnits = {
//   F: (weather.temperature.F = `${Math.round(data.main.temp)}°F`),
//   C: (weather.temperature.C = `${Math.round(
//     ((data.main.temp - 32) * 5) / 9
//   )}°C`),
// };

export const CurrentTempUnitContext = React.createContext();
