import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "dotenv/config";
require("dotenv").config();

const { APIKEY } = process.env;
alert(APIKEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
