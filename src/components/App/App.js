import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
// import Cards from "../Cards/Cards";
import React from "react";
import font from "../../vendor/Fonts/fonts.css";

// const currentDateEl = document.getElementById('currentDate');
// currentDateEl.innerHTML = currentDate;

function App() {
  return (
    <>
      <div>
        <Header />
        <Main>
          <Weather />
          {/* <Cards /> */}
        </Main>
      </div>
    </>
  );
}

export default App;
