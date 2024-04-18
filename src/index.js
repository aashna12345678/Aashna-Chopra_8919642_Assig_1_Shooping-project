import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "phosphor-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
