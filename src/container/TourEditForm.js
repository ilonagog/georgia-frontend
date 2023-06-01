
import React, { useState } from 'react'

const TourEditForm = ({ tour, editATour, country }) => {
    const [viewTourEditForm, setViewTourEditForm] = useState(false)
    const [name, setName] = useState(tour.name)
    const [image_url, setImage] = useState(tour.image_url)
    const [price, setPrice] = useState(tour.price)
    const [days, setDays] = useState(tour.days)


    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault()

        const editedTour = {
            ...tour,
            country_id: country.id,
            name: name,
            image_url: image_url,
            price: price,
            days: days,
        }
        editATour(editedTour)
        setViewTourEditForm()
    }

    function handleEditView() {
        setViewTourEditForm(true)
    }
    return (
        <div>
            {viewTourEditForm ?
                // <div>
                //     <form onSubmit={handleSubmit}>
                //         <p>Name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></p>
                //         <p>Image: <input image={image_url} onChange={(e) => setImage(e.target.value)} value={image_url} placeholder={image_url} type="text" /></p>
                //         <p>Price: <input price={price} onChange={(e) => setPrice(e.target.value)} value={price} placeholder={price} type="text" /></p>
                //         <p>Days: <input days={days} onChange={(e) => setDays(e.target.value)} value={days} placeholder={days} type="text" /></p>
                //         <button type="submit"> Save Changes </button>
                //     </form>
                // </div>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>

                    <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor='image'>Image:</label>

                    <input type="text" id='image' image='image_url' value={image_url} onChange={(e) => setImage(e.target.value)} />
                    <label htmlFor='price'>Price:</label>

                    <input type="text" id="price" price='price' value={price} onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor='days'>Days:</label>

                    <input type="text" days='days' value={days} onChange={(e) => setDays(e.target.value)} />

                    <button className='submit' type='submit'>Submit</button>
                </form>
                :
                <footer className='footer'>
                    <button className="button" onClick={handleEditView}>Edit description</button>
                </footer>}
        </div>
    )
}

export default TourEditForm






/*

import React, { useState } from 'react'

const TourEditForm = ({ tour, editATour, country }) => {
    const [viewTourEditForm, setViewTourEditForm] = useState(false)
    const { id, name, image_url, price, days } = tour
    const [tourData, setTourData] = useState({
        id: id,
        name: name,
        image_url: image_url,
        price: price,
        days: days
    })

    console.log('tourdata', tourData)

    const handleChange = (e) => {
        const name = e.target.name;
        const image_url = e.target.image_url;
        const price = e.target.price;
        const days = e.target.days;
        const value = e.target.value;

        setTourData({
            ...tourData,
            [name]: value,
            [image_url]: value,
            [price]: value,
            [days]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const editedTour = {
            ...tourData,
            tour_id: tour.id,
            country_id: country.id
        }
        editATour(editedTour)
    }

    function handleEditView() {
        setViewTourEditForm(true)
    }

    return (
        <div>
            {viewTourEditForm ?
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>

                    <input type="text" id='name' name='name' value={tourData.name} onChange={handleChange} />

                    <label htmlFor='image'>Image:</label>

                    <input type="text" id='image' image='image_url' value={tourData.image_url} onChange={handleChange} />
                    <label htmlFor='price'>Price:</label>

                    <input type="text" id="price" price='price' value={tourData.price} onChange={handleChange} />

                    <label htmlFor='days'>Days:</label>

                    <input type="text" days='days' value={tourData.days} onChange={handleChange} />

                    <button className='submit' type='submit'>Submit</button>
                </form>
                :
                <button className="button" onClick={handleEditView}>Edit description</button>}
        </div>)

}

export default TourEditForm

*/