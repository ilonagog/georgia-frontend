import React from 'react'

const Tour = ({ tour }) => {
    return (
        <ul className='cards'>
            <li className='card'>
                <h3>{tour.name}</h3>
                <figure className="image">
                    <img src={tour.image_url} alt={tour.image_url} />
                </figure>
                <h3>Price: ${tour.price}</h3>
                <h3>Days:{tour.days}</h3>
            </li>
        </ul>
    )
}

export default Tour

