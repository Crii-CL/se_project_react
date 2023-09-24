const getWeather = (latitude, longitude, apiKey, temperature) => {
  // if (tempUnits.F && temperature >= 86 && temperature <= 110) {
  //   return "hot";
  // } else if (tempUnits.F && temperature >= 65 && temperature <= 85) {
  //   return "warm";
  // } else if (tempUnits.F && temperature <= 65) {
  //   return "cold";
  // }

  // if (tempUnits.C && temperature >= 30 && temperature <= 43) {
  //   return "hot";
  // } else if (tempUnits.C && temperature >= 18 && temperature <= 29) {
  //   return "warm";
  // } else if (tempUnits.C && temperature <= 18) {
  //   return "cold";
  // }

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
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
