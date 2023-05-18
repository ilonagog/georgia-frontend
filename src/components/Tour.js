import React from 'react'

const Tour = ({ tour, onDeleteTour }) => {

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/countries/${tour.id}`, {
            method: "DELETE"
        })
            .then((resp => resp.json()))
            .then(() => onDeleteTour(tour))
    }

    return (
        <ul className='cards'>
            <li className='card'>
                <h3>{tour.name}</h3>
                <figure className="image">
                    <img src={tour.image_url} alt={tour.image_url} />
                </figure>
                <h3>Price: ${tour.price}</h3>
                <h3>Days:{tour.days}</h3>
                <footer>
                    <button className="delete" onClick={handleDeleteClick}>🚮</button>
                </footer>
            </li>
        </ul>
    )
}

export default Tour

