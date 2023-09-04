import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="wikiFlex">
          <CountriesList countries={countriesData} />
          <Routes className="countryDetail">
          <Route
            path="/:id"
            element={<CountryDetails countries={countriesData} />}
          />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
