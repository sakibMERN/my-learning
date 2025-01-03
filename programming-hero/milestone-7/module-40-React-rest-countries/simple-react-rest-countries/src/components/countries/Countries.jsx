import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {

    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags);
  }


  //Remove item from an array in a state
  //use filter to select all the elements except the one you want to remove.


  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries  */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
        
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country 
          key={country.cca3} 
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
}
