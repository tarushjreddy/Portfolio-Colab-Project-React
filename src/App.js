import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./header_part.js";
import CradLayout from "./cardlayout.js";
import Data from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="App">
      <Navbar />

      <CradLayout />
    </div>
  );
}

export default App;
