import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/pages/HomePage";
import Reparation from "./reparation/pages/Reparation";
import Micosoudure from "./microsoudure/pages/microsoudure";
import Accessoire from "./accessoire/pages/Accessoire";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/REPARATION" element={<Reparation />}></Route>
        <Route path="/MICROSOUDURE" element={<Micosoudure />}></Route>
        <Route path="/ACCESSOIRE" element={<Accessoire />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
