import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import ItemCard from "../ItemCard/ItemCard";
import Footer from "../Footer/Footer";
import React from "react";
import font from "../../vendor/Fonts/fonts.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main>
          <Weather day={true} type="sunny" />
          <ItemCard />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
