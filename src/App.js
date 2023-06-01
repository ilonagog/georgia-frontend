//everything for the container  test project
import React, { useState, useEffect } from 'react'
import './App.css';
import RealHome from './container/RealHome';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./container/NavBar";
import Countries from './container/Countries';
import Country from "./container/Country"
import Contact from './container/Contact';


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
  useEffect(() => {
    console.log("update")
  }, [countries])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<RealHome />} />
        <Route exact path="/countries" element={<Countries countries={countries} setCountries={setCountries} />} />
        <Route exact path="/countries/:id" element={<Country countries={countries} setCountries={setCountries} />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes >
    </div >
  )
}

export default App;

// import React, { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import CountryList from "./components/CountryList";
// import AddCountry from "./components/AddCountry";
// import NavBar from "./components/NavBar"
// import Home from "./components/Home";
// import Contact from "./components/Constact";
// //import AddTour from "./components/AddTour";

// const App = () => {

//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:9292/countries")
//       .then((data) => data.json())
//       .then((data) => setCountries(data))
//   }, [])

//   //console.log("country list component", countries)

//   function onAddCountry(newCountry) {
//     setCountries([...countries, newCountry])
//   }



//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/countries" element={<CountryList countries={countries} setCountries={setCountries} />} />
//         <Route exact path="/countries/new" element={<AddCountry onAddCountry={onAddCountry} />} />
//         {/* <Route exact path="/countries/:id/tour/new" element={<AddTour />} /> */}
//         <Route exact path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }


// export default App




// import React, { useState, useEffect } from 'react'
// import './App.css';
// import Home from './test/Home';
// import { Route, Routes } from 'react-router-dom';
// import NavBar from "./test/NavBar"
// import Countries from './components/Countries';
// import Country from "./components/Country"
// import Contact from './components/Constact';
// import NewTour from './test/NewTour';
// import Tour from './test/Tour';

// function App() {

//   const [countries, setCountries] = useState([])
//   const [currentCountry, setCurrentCountry] = useState({
//     tours: []
//   })

//   useEffect(() => {
//     fetch('http://localhost:9292/countries')
//       .then(resp => resp.json())
//       .then(data => {
//         console.log(data)
//         setCountries(data)
//       })
//   }, [])

//   const addNewCountry = (newCountry) => {
//     setCountries((countryObj) => [...countryObj, newCountry])
//   }

//   const addTour = (tour) => {
//     const newTours = [tour, ...currentCountry.tours]
//     currentCountry.tours = newTours
//     const filteredCountries = countries.filter(coun => coun.id !== tour.country_id)
//     const newCountry = [currentCountry, ...filteredCountries]
//     setCurrentCountry(currentCountry)
//     setCountries(newCountry)
//   }

//   const onDeleteTour = (id) => {
//     setCurrentCountry(prevTours => {
//       const filteredArray = prevTours.filter((tour) => tour.id !== id)
//       return filteredArray
//     })
//   }

//   const onUpdateTour = (updatedNameTour) => {
//     // debugger
//     const updatedArray = currentCountry.tours.map((tour) => tour.id === updatedNameTour.id ? updatedNameTour : tour);
//     setCurrentCountry({ ...currentCountry, tours: updatedArray })
//   }

//   const toursLink = currentCountry.tours.map(t => <Tour key={t.id} tour={t}
//     onDeleteTour={onDeleteTour} onUpdateTour={onUpdateTour} currentCountry={currentCountry} />)

//   console.log(toursLink)

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/countries" element={<Countries countries={countries} addNewCountry={addNewCountry} />} />
//         <Route exact path="/countries/:id" element={<Country countries={countries} setCountries={setCountries} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} onDeleteTour={onDeleteTour} onUpdateTour={onUpdateTour} tours={toursLink} />} addTour={addTour} />
//         < Route exact path='/countries/:id/tour/new' element={< NewTour addTour={addTour} />} />
//         <Route exact path='/tours/:id' element={<Tour tours={toursLink} addTour={addTour} />} />
//         <Route exact path='/contact' element={<Contact />} />
//       </Routes >
//     </div >
//   );
// }

// export default App;
