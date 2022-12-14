import React from "react";
import "./App.css";
import Nav from "./Components/organisms/nav";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Home />} />
        <Route element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
