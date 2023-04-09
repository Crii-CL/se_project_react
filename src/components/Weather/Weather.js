import "./Weather.css";
import daySunny from "../../images/day-snow.svg";

function Weather() {
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
