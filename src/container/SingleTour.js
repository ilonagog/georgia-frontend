
import React from 'react'
import TourEditForm from './TourEditForm'

const SingleTour = ({ deleteATour, editATour, tour, country }) => {
    // const [viewTourEditForm, setViewTourEditForm] = useState(false)

    // function handleEditView() {
    //     setViewTourEditForm(true)
    // }

    return (

        <div className="container">
            <ul className='card'>
                <p>{tour.name}</p>
                <figure className='image'>
                    <img className='image' src={tour.image_url} alt={tour.image_url} /></figure>
                <section className='details'>
                    <p>Price: $ {tour.price}</p>
                    <p>Days: {tour.days}</p>
                </section>
                {/* {viewTourEditForm ? */}
                <TourEditForm editATour={editATour} tour={tour} country={country} />

                {/* <button className="button" onClick={handleEditView}>Edit description</button> */}
                <footer className='footer'>
                    <button onClick={() => deleteATour(tour.id)} >Delete</button>
                </footer>

            </ul>
        </div>
    )
}

export default SingleTour
