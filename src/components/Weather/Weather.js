import "./Weather.css";
import daySunny from "../../images/day-snow.svg";

const weatherOptions = [
  { url: "../../images/day-sunny.svg", day: true, type: "sunny" },
  { url: "../../images/day-rain.svg", day: true, type: "rain" },
  { url: "../../images/day-cloudy.svg", day: true, type: "cloudy" },
  { url: "../../images/day-storm.svg", day: true, type: "storm" },
  { url: "../../images/day-fog.svg", day: true, type: "fog" },
  { url: "../../images/day-snow.svg", day: true, type: "snow" },
  { url: "../../images/night-sunny.svg", day: false, type: "sunny" },
  { url: "../../images/night-rain.svg", day: false, type: "rain" },
  { url: "../../images/night-cloudy.svg", day: false, type: "cloudy" },
  { url: "../../images/night-storm.svg", day: false, type: "storm" },
  { url: "../../images/night-fog.svg", day: false, type: "fog" },
  { url: "../../images/night-snow.svg", day: false, type: "snow" },
];

function Weather({ day, type }) {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  return (
    <>
      <section className="weather">
        <div className="weather__info">25F</div>
        <img
          className="weather__image"
          src={daySunny}
          alt="weather conditions frame"
        />
      </section>
    </>
  );
}

export default Weather;
