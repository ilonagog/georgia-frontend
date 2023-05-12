import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Countries from './components/Countries';
import Country from "./components/Country"
import Contact from './components/Constact';
import NewCountry from './components/NewCountry';
import NewTour from './components/NewTour';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/countries')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCountries(data)
      })
  }, [])

  const addNewCountry = (newCountry) => {
    setCountries((countryObj) => [...countryObj, newCountry])
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/countries" element={<Countries countries={countries} />} />
        <Route exact path="/countries/:id" element={<Country />} />
        <Route exact path='/country/new' element={<NewCountry addNewCountry={addNewCountry} />} />
        <Route exact path='/countries/:id/tour/new' element={<NewTour />} />
        {/* <Route exact path='/tours' element={<Tours tours={tours} />} /> */}
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
