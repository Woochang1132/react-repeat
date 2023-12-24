import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import AppTheme from "./AppTheme.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppTheme />
  </React.StrictMode>
);
