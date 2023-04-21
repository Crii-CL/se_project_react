export default function getWeather(latitude, longitude, apiKey, temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 85) {
    return "warm";
  } else if (temperature <= 65) {
    return "cold";
  }

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
