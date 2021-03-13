import "./car.css";
import React, { useState, useEffect } from "react";
import Card from "./card.js";
import Data from "./data.json";
function Trail() {
  const [dataone, setData] = useState({});
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);

        console.log(dataone);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="App">
        {/* {dataone &&
          dataone.length > 0 &&
          dataone.map((item) => <div>{item.userId}</div>)} */}
        this
      </div>
    </div>
  );
}

export default Trail;
