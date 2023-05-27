import React from 'react'
import Tour from './Tour'
import AddTour from './AddTour'
import { useState } from 'react'

const CountryCard = ({ singleCountry, setCountries }) => {
    const [tourShowing, setTourShowing] = useState(false)
    const [addTourShowing, setAddTourShowing] = useState(false)
    const [noTours, setNoTours] = useState(false)
    const [onEditMode, setOnEditMode] = useState(false)
    const [name, setName] = useState(singleCountry.name)
    const [countryTours, setCountryTours] = useState(singleCountry.tours)

    function handleClick() {
        if (countryTours.length === 0) {
            setNoTours((noTours) => !noTours)
            setAddTourShowing(false)
        } else {
            setTourShowing((tourShowing) => !tourShowing)
            setAddTourShowing(false)
        }
    }

    function handleNewTourClick() {
        setAddTourShowing((addTourShowing) => !addTourShowing)
        setTourShowing(false)
        setNoTours(false)
    }

    function onUpdatedTour(updatedTour) {
        const updatedTours = countryTours.map((tour) => {
            if (tour.id === updatedTour.id) {
                return updatedTour
            } else {
                return tour
            }
        })
        setCountryTours(updatedTours)
    }

    const handleTourDelete = (deletedTour) => {
        const newArrayTors = countryTours.filter((tour) => tour.id !== deletedTour.id)
        setCountryTours(newArrayTors)
    }

    const onAddTour = (newTours) => {
        setCountryTours(newTours)
        setCountries(newTours)
    }
    // console.log(countryTours)
    const countryToursDisplay = countryTours.map((tour) =>
        <Tour key={tour.id} tour={tour} onUpdatedTour={onUpdatedTour} handleTourDelete={handleTourDelete} />
    )
    console.log(countryTours)
    //console.log(countryToursDisplay)
    function handleEditClick() {
        setOnEditMode((onEditMode) => !onEditMode)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
        setCountryTours(name)
    }
    return (
        <div>
            {onEditMode ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3>Name: <input name={name} onChange={(e) => setName(e.target.value)} value={singleCountry.name} placeholder={singleCountry.name} type="text" /></h3>
                        <button type="submit"> Save Changes </button>
                        <button onClick={handleEditClick}> Cancel </button>
                    </form>
                </div>
            ) :
                <div>
                    <h3>Country: {singleCountry.name}</h3>
                    <img src={singleCountry.image_url} alt={singleCountry.image_url} />
                </div>}

            <button onClick={handleClick}>View Tours</button>
            <button onClick={handleNewTourClick}>Add Tour</button>
            {tourShowing ? (
                countryToursDisplay
            ) : null}
            {noTours ? (
                <div>
                    <p>This country has no tours.</p>
                    <p>Add new Tours!</p>
                </div>
            ) : null}
            {addTourShowing ? (
                <AddTour onAddTour={onAddTour} country_id={singleCountry.id} setCountries={setCountries} />
            ) : null}
        </div>
    )
}

export default CountryCard
