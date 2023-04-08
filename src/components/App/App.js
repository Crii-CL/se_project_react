import Header from "../Header/Header";
import Weather from "../Weather/Weather";
// import Cards from "../Cards/Cards";
import React from "react";

// const currentDateEl = document.getElementById('currentDate');
// currentDateEl.innerHTML = currentDate;

function App() {
  return (
    <>
      <div>
        <Header />
        <Weather />
        {/* <Cards /> */}
      </div>
    </>
  );
}

export default App;
