import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/routes/router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
