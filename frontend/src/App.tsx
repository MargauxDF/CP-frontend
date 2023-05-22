import React from "react";
import { Route, Routes } from "react-router-dom";
import ContinentsList from "./pages/ContinentsList";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsList />} />
        <Route path="/continent/:code" element={<CountriesList />} />
        <Route path="/continent/:code/country/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
