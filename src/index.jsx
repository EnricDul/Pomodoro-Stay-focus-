import Timer from "../components/timer";
import React from "react";
import ReactDOM from "react-dom";
import "../scss/app.scss";


const timerArea = document.getElementById("timerArea");

ReactDOM.render(
  <Timer />, timerArea
);