import React from "react";
import "./App.css";
import Home from "./assets/Pages/Home";

import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";
import TextDisplay from "./assets/Components/TextDisplay";
import Featured from "./assets/Pages/Featured";
import Summer from "./assets/Pages/Summer";
import Varsity from "./assets/Pages/Varsity";
import Yoga from "./assets/Pages/Yoga";
import Spotlight from "./assets/Pages/Spotlight";
import Sport from "./assets/Pages/Sport";
import Items from "./assets/Pages/Items";

const App = () => {
  return (
    <>
      <Header />

      <TextDisplay />
      <Home />
      <Featured />
      <Summer />
      <Varsity />
      <Yoga />
      <Spotlight />
      <Sport />
      <Items />

      <Footer />
    </>
  );
};

export default App;
