import React from "react";

import "./App.css";
import Card from "./card";
import Hero from "./Hero";

import Navbar from "./Navbar";
// import img from '../images/image 12.png'
import data from "./data";

function App() {
  const loadData = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card">{loadData}</section>
    </div>
  );
}

export default App;
