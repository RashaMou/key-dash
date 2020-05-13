import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Home = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get("https://key-conservation-staging.herokuapp.com/api/users/126")
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={clickHandler}>FETCH</button>
    </div>
  );
};

export default Home;
