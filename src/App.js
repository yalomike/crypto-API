import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
