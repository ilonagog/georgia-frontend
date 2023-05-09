import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Countries from './components/Countries';
import Country from "./components/Country"
import Contact from './components/Constact';
import CountryForm from './components/CountryForm';
import Tours from './components/Tours';
import TourForm from './components/TourForm';

function App() {

  const [countries, setCountries] = useState([])
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/countries')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCountries(data)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/tours')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setTours(data)
      })
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/countries" element={<Countries countries={countries} />} />
        <Route exact path="/countries/:id" element={<Country />} />
        <Route exact path='/countryform' element={<CountryForm />} />
        <Route exact path='/tourform' element={<TourForm />} />
        <Route exact path='/tours' element={<Tours tours={tours} />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
