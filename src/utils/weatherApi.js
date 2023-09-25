import { constants } from "./constants";

let latitude;
let longitude;

const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        resolve();
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const getWeather = () => {
  return getLocation()
    .then(() => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${constants.apiKey}`
      );
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`);
    });
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const tempUnits = (temp) => ({
  F: `${Math.round(temp)}°F`,
  C: `${Math.round(((temp - 32) * 5) / 9)}°C`,
});

export default getWeather;
