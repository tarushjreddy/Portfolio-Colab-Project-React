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
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function App(params) {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     axios.get("data.json").then((res) => {
//       console.log(res);
//       setPost(res.data);
//     });
//   }, []);
//   return (
//     <div>
//       <ul>
//         {post.map((posts) => (
//           <div>{posts.name}</div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
