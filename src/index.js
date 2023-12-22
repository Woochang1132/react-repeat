import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import AppForm from "./AppForm.jsx";
import AppMentors from "./AppMentors.jsx";
import AppMentorsImmer from "./AppMentorsImmer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentorsImmer />
  </React.StrictMode>
);
