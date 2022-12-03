import React from "react";
import TopApp from "./pages/TopApp";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<TopApp />} />
      </Routes>
  
    </div>
  );
}

export default App;
