function Weather() {
  return (
    <>
      <div className="weather">
        <div className="weather__container">
          <p className="weather__info"></p>
          <img
            className="weather__img"
            src="../images/day-sunny.svg"
            alt="weather conditions frame"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Weather;
