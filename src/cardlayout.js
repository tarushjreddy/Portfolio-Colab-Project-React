import "./car.css";
import React, { useState, useEffect } from "react";
import Card from "./card.js";
import Data from "./data.json";
function CradLayout() {
  const [data, setData] = useState([]);
  const [dataone, setDataone] = useState([]);
  const [datafour, setDatafour] = useState([]);
  const [datafive, setDatafive] = useState([]);
  const [datasix, setDatasix] = useState([]);
  const [dataseven, setDataseven] = useState([]);
  const [dataeight, setDataeight] = useState([]);
  const [datanine, setDatanine] = useState([]);
  const [dataten, setDataten] = useState([]);
  const [dataseleven, setDataeleven] = useState([]);
  const [datatwo, setDatatwo] = useState([]);
  const [datathree, setDatathree] = useState([]);

  const [datatwl, setDatatwl] = useState([]);
  const [datathr, setDatathr] = useState([]);

  const [datafor, setDatafor] = useState([]);
  const [datafiv, setDatafiv] = useState([]);

  const [datasixt, setDatasixt] = useState([]);
  const [datasvn, setDatasvn] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (data) {
        var car = Object.values(data);
        var column_one_keys = Object.keys(car[1]);
        var column_one_val = Object.values(car[1]);
        setDataone(column_one_keys);
        setData(column_one_val);
        var column_two_keys = Object.keys(car[0]);
        var column_two_val = Object.values(car[0]);
        setDatatwo(column_two_keys);
        setDatathree(column_two_val);
        var column_three_keys = Object.keys(car[2]);
        var column_three_val = Object.values(car[2]);
        setDatafour(column_three_keys);
        setDatafive(column_three_val);

        var column_four_keys = Object.keys(car[3]);
        var column_four_val = Object.values(car[3]);
        setDatasix(column_four_keys);
        setDataseven(column_four_val);
        var column_five_keys = Object.keys(car[4]);
        var column_five_val = Object.values(car[4]);
        setDataeight(column_five_keys);
        setDatanine(column_five_val);
        var column_six_keys = Object.keys(car[5]);
        var column_six_val = Object.values(car[5]);
        setDataten(column_six_keys);
        setDataeleven(column_six_val);

        var column_seven_keys = Object.keys(car[6]);
        var column_seven_val = Object.values(car[6]);
        setDatatwl(column_seven_keys);
        setDatathr(column_seven_val);

        var column_eight_keys = Object.keys(car[7]);
        var column_eight_val = Object.values(car[7]);
        setDatafor(column_eight_keys);
        setDatafiv(column_eight_val);

        var column_nine_keys = Object.keys(car[8]);
        var column_nine_val = Object.values(car[8]);
        setDatasixt(column_nine_keys);
        setDatasvn(column_nine_val);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardLayout">
      <Card
        headding={datathree[0]}
        val={datathree[1]}
        valone={datathree[2]}
        valtwo={datathree[3]}
        resone={datatwo[2]}
        restwo={datatwo[1]}
        res={datatwo[1]}
      />
      <Card
        headding={data[0]}
        val={data[1]}
        valone={data[2]}
        valtwo={data[3]}
        resone={dataone[2]}
        restwo={dataone[1]}
        res={dataone[1]}
      />
      <Card
        headding={datafive[0]}
        val={datafive[1]}
        valone={datafive[2]}
        valtwo={datafive[3]}
        resone={datafour[2]}
        restwo={datafour[1]}
        res={datafour[1]}
      />
      <Card
        headding={dataseven[0]}
        val={dataseven[1]}
        valone={dataseven[2]}
        valtwo={dataseven[3]}
        resone={dataeight[2]}
        restwo={dataeight[1]}
        res={dataeight[1]}
      />
      <Card
        headding={datanine[0]}
        val={datanine[1]}
        valone={datanine[2]}
        valtwo={datanine[3]}
        resone={dataeight[2]}
        restwo={dataeight[1]}
        res={dataeight[1]}
      />
      <Card
        headding={dataseleven[0]}
        val={dataseleven[1]}
        valone={dataseleven[2]}
        valtwo={dataseleven[3]}
        resone={dataten[2]}
        restwo={dataten[1]}
        res={dataten[1]}
      />

      <Card
        headding={datathr[0]}
        val={datathr[1]}
        valone={datathr[2]}
        valtwo={datathr[3]}
        resone={datatwl[2]}
        restwo={datatwl[1]}
        res={datatwl[1]}
      />
      <Card
        headding={datafiv[0]}
        val={datafiv[1]}
        valone={datafiv[2]}
        valtwo={datafiv[3]}
        resone={datafor[2]}
        restwo={datafor[1]}
        res={datafor[1]}
      />
      <Card
        headding={datasvn[0]}
        val={datasvn[1]}
        valone={datasvn[2]}
        valtwo={datasvn[3]}
        resone={datasixt[2]}
        restwo={datasixt[1]}
        res={datasixt[1]}
      />
    </div>
  );
}

export default CradLayout;
