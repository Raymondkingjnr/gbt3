import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGBT3,
} from "./containers";
import { Navbar, Cta, Brand } from "./componenets";
function App() {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGBT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
