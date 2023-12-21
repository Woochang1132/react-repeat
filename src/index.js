import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import AppForm from "./AppForm.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);
