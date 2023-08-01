import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ADD from "./components/add";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
          <Route path="/" element={<App />} />
          <Route path="add" element={<ADD />} />
        </Routes>
    
  </BrowserRouter>
);

reportWebVitals();
