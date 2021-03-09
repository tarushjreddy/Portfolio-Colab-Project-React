import React from "react";
import "./header_part.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logone from "./main.jpg";
function Navbar() {
  return (
    <div className="nav_bar">
      <div className="contents">
        <div className="logo">
          {" "}
          <img src={logone} alt="" className="App-logone"></img>
          <h1 className="Text_name">Portfolio</h1>
        </div>
        <i className="far fa-user-circle"></i>
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <h1 className="Text_name_one">
          MY PORTFOLIOS | CREATE PORTFOLIO | test_user
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
