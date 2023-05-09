
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Countries from './components/Countries';
import Country from "./components/Country"
import Contact from './components/Constact';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/countries" element={<Countries />} />
        <Route exact path="/countries/:id" element={<Country />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
