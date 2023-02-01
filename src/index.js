import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetail from "./components/CoinDetail";
import { CoinList } from "./components/CoinList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<CoinList />} />
          <Route path="/CoinDetail/:id" element={<CoinDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
