
import React, { useState } from 'react'
import TourEditForm from './TourEditForm'

const SingleTour = ({ deleteATour, editATour, tour, country, viewTourEditForm, setViewTourEditForm }) => {
    // const [viewTourEditForm, setViewTourEditForm] = useState(false)

    function handleEditView() {
        setViewTourEditForm(true)
    }

    return (

        <div className="container">
            <li className='card'>
                <p>{tour.name}</p>
                <figure className='image'>
                    <img className='image' src={tour.image_url} alt={tour.image_url} /></figure>
                <section className='details'>
                    <p>Price: $ {tour.price}</p>
                    <p>Days: {tour.days}</p>
                </section>
                {viewTourEditForm ?
                    <TourEditForm editATour={editATour} tour={tour} country={country} />
                    :
                    <button className="button" onClick={handleEditView}>Edit description</button>
                }
                <button onClick={() => deleteATour(tour.id)} >Delete</button>
            </li>
        </div>
    )
}

export default SingleTour
