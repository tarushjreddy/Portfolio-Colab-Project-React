import "./card.css";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
// import data from "./data.json";

function Card({ headding, val, valone, valtwo, res, resone, restwo }) {
  return (
    <div className="cardLayout_pro">
      <div className="header_pro">
        <p>{headding}</p>
      </div>
      <Table striped hover>
        <tbody>
          <tr>
            <td>{res}</td>
            <td>{val}</td>
          </tr>
          <tr>
            <td>{resone}</td>
            <td>{valone}</td>
          </tr>
          <tr>
            <td>{restwo}</td>
            <td>{valtwo}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
  //   });
}

export default Card;
