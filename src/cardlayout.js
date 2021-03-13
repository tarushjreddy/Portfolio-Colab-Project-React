import "./car.css";
// import React, { useState, useEffect } from "react";
import Card from "./card.js";
import Data from "./data.json";
import React, { useEffect, useState } from "react";
import axios from "axios";

function CradLayout() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      console.log(res);
      setPost(res.data);
      console.log(post);
    });
  }, []);
  return (
    <div className="cardLayout">
      {post.map((
        posts //map(function(posts){}
      ) => (
        <div>
          <Card
            headding={posts.name}
            val={posts.oneyear}
            valone={posts.threeyear}
            valtwo={posts.fiveyear}
            res={posts.oneKey}
            resone={posts.threeKey}
            restwo={posts.fiveKeyr}
          />
        </div>
      ))}
    </div>
  );
}

export default CradLayout;
