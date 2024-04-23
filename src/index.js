import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={2000}
      closeOnClick
      pauseOnHover
    />
    <App />
  </React.StrictMode>
);
