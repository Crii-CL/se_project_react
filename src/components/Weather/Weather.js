import "./Weather.css";
import daySunny from "../../images/day-sunny.svg";
import dayRain from "../../images/day-rain.svg";
import dayCloudy from "../../images/day-cloudy.svg";
import dayStorm from "../../images/day-storm.svg";
import dayFog from "../../images/day-fog.svg";
import daySnow from "../../images/day-snow.svg";
import nightSunny from "../../images/night-sunny.svg";
import nightRain from "../../images/night-rain.svg";
import nightCloudy from "../../images/night-cloudy.svg";
import nightStorm from "../../images/night-storm.svg";
import nightFog from "../../images/night-foggy.svg";
import nightSnow from "../../images/night-snow.svg";

const weatherOptions = [
  { url: daySunny, day: true, type: "sunny" },
  { url: dayRain, day: true, type: "rain" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: dayStorm, day: true, type: "storm" },
  { url: dayFog, day: true, type: "fog" },
  { url: daySnow, day: true, type: "snow" },
  { url: nightSunny, day: false, type: "sunny" },
  { url: nightRain, day: false, type: "rain" },
  { url: nightCloudy, day: false, type: "cloudy" },
  { url: nightStorm, day: false, type: "storm" },
  { url: nightFog, day: false, type: "fog" },
  { url: nightSnow, day: false, type: "snow" },
];

export default function Weather({ day, type }) {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <>
      <section id="weather-section">
        <div className="weather">
          <div className="weather__info" id="weather-info">
            {}
            {/* Display Temperature */}
          </div>
          <img
            className="weather__image"
            src={imageSrcUrl}
            alt="weather conditions frame"
          />
        </div>
        <div>
          <h1 className="weather__message">
            Today is {}/ You may want to wear:
            {/* figure out why type isn't passing*/}
          </h1>
        </div>
      </section>
    </>
  );
}
