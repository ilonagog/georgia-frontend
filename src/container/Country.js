
import React, { useState, useEffect } from 'react'
import SingleTour from './SingleTour'
import TourForm from './TourForm'
import { useParams } from 'react-router-dom'

const Country = ({ countries, setCountries }) => {
    const [viewTourForm, setViewTourForm] = useState(false)
    const [country, setCountry] = useState({
        tours: []
    })
    const { id } = useParams()

    useEffect(() => {
        const selectedCountry = countries.find(c => c.id === parseInt(id))
        if (selectedCountry) {

            setCountry(selectedCountry)
        }
    }, [countries, id])


    const addTour = (tour) => {
        fetch(`http://localhost:9292/tours`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tour)
        })
            .then(r => r.json())
            .then(data => {
                console.log("new tour", data)
                const newCountry = {
                    ...country,
                    tours: [...country.tours, data]
                }
                const newCountries = countries.map(c => c.id === data.country_id ? newCountry : c)
                setCountries(newCountries)
            })
        setViewTourForm(false)
    }

    const editTour = (tour) => {
        fetch(`http://localhost:9292/countries/${country.id}/tours/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tour)
        })
            .then(res => res.json())
            .then((data) => {
                const newTours = country.tours.filter(c => c.id !== id)
                const updatedCountries = countries.map(c => c.id === data.id ? { ...c, tours: newTours } : c)
                setCountries(updatedCountries)
            })
    }
    const deleteTour = (id) => {
        fetch(`http://localhost:9292/countries/${country.id}/tours/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                const newTours = country.tours.filter(c => c.id !== id)
                const updatedCountries = countries.map(c => c.id === country.id ? { ...c, tours: newTours } : c)
                setCountries(updatedCountries)
            })
    }


    const tours = country.tours.map(t => <SingleTour key={t.id} tour={t} deleteATour={deleteTour} editATour={editTour} country={country} />)
    // console.log(tours)

    function handleClick() {
        setViewTourForm(true)
    }

    return (
        <div>
            <br />
            <h2>{country.name}</h2>
            {viewTourForm ?
                <TourForm addATour={addTour} country={country} />
                :
                <button className="button" onClick={handleClick}>Add Tour</button>
            }
            <hr />
            <h3>Tours:{tours}</h3>
            <br />
        </div >
    )
}
export default Country