import React, { useState } from 'react'

const TourEditForm = ({ tour, editATour, country }) => {
    const [name, setName] = useState(tour.name)
    const [image_url, setImage] = useState(tour.image_url)
    const [price, setPrice] = useState(tour.price)
    const [days, setDays] = useState(tour.days)

    const resetForm = (
        setDays(""),
        setName(''),
        setPrice(''),
        setImage(''))

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault()

        const newTour = {
            ...tour,
            country_id: country.id,
            name: name,
            image_url: image_url,
            price: price,
            days: days,
        }
        editATour(newTour)
        resetForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
                <label>Image:</label>
                <input image={image_url} onChange={(e) => setImage(e.target.value)} value={image_url} type="text" />
                <label>Price:</label>
                <input price={price} onChange={(e) => setPrice(e.target.value)} value={price} type="text" />
                <label>Days:</label>
                <input days={days} onChange={(e) => setDays(e.target.value)} value={days} type="text" />
                <input type='submit' />
            </form>
        </div>
    )
}

export default TourEditForm
