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
            price: price,
            days: days,
            image_url: image_url
        }
        editATour(newTour)
        resetForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></p>
                <p>Image: <input image={image_url} onChange={(e) => setImage(e.target.value)} value={image_url} placeholder={image_url} type="text" /></p>
                <p>Price: <input price={price} onChange={(e) => setPrice(e.target.value)} value={price} placeholder={price} type="text" /></p>
                <p>Days: <input days={days} onChange={(e) => setDays(e.target.value)} value={days} placeholder={days} type="text" /></p>
                <button type="submit"> Save Changes </button>
            </form>
        </div>
    )
}

export default TourEditForm
