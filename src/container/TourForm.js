import React, { useState } from 'react'


const TourForm = ({ addATour, country }) => {
    const [name, setName] = useState('')
    const [image_url, setImage_url] = useState('')
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTour = {
            name: name,
            image_url: image_url,
            price: price,
            days: days,
            country_id: country.id,
        }
        addATour(newTour)
    }

    const handleImageChange = (e) => {
        setImage_url(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleDaysChange = (e) => {
        setDays(e.target.value)
    }


    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Tour !</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" value={name} onChange={handleNameChange} />
                <label htmlFor='image'>Image:</label>
                <input type="text" image_url="image" value={image_url} onChange={handleImageChange} />
                <label htmlFor='price'>Price:</label>
                <input type="text" price="price" value={price} onChange={handlePriceChange} />
                <label htmlFor='days'>Days:</label>
                <input type="text" days="days" value={days} onChange={handleDaysChange} />
                <input type='submit' />
            </form>
        </section>
    )
}

export default TourForm
