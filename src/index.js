import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import AppForm from "./AppForm.jsx";
import AppTheme from "./AppTheme.jsx";
import AppMentor from "./AppMentor.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentor />
  </React.StrictMode>
);
