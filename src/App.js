import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
