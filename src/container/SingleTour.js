
import React, { useState } from 'react'
import TourEditForm from './TourEditForm'

const SingleTour = ({ deleteATour, editATour, tour, country }) => {
    const [tourEditFormFlag, setTourEditFormFlag] = useState(false)

    const toggleEditTourForm = () => {
        const toggle = !tourEditFormFlag
        setTourEditFormFlag(toggle)
    }

    return (

        <div>
            <div>
                <p>Name: {tour.name}</p>
                <img src={tour.image_url} alt={tour.image_url} />
                <p>Price: $ {tour.price}</p>
                <p>Days: {tour.days}</p>
                {tourEditFormFlag ? <TourEditForm toggleForm={toggleEditTourForm} editATour={editATour} tour={tour} country={country} /> : <button onClick={toggleEditTourForm}>Edit description</button>}
                <button onClick={() => deleteATour(tour.id)} >Delete</button>
            </div>
        </div>
    )
}

export default SingleTour
