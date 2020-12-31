import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./index.css";
const Display = () => {
  return (
    <React.StrictMode>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </React.StrictMode>
  );
};

export default Display;
