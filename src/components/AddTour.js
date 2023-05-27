import React, { useState } from 'react'
//import { useParams } from 'react-router-dom'

const AddTour = ({ onAddTour, country_id, setCountries }) => {
    const [name, setName] = useState('')
    const [image_url, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')

    // const params = useParams()

    const resetForm = () => {
        setName("")
        setImage("")
        setPrice("")
        setDays("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTour = {

            name: name,
            image_url: image_url,
            price: price,
            days: days,
            country_id: country_id
        }
        fetch(`http://localhost:9292/tours`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newTour)
        })
            .then(r => r.json())
            .then((newTour) => {
                onAddTour(newTour)

                setCountries(newTour)
                resetForm()
            })
        console.log(name)

    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleImageChange = (e) => {
        setImage(e.target.value)
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
                <input type="text" id="name" value={name} onChange={handleNameChange}></input>
                <label htmlFor='image'>Image:</label>
                <input type="text" id="image" value={image_url} onChange={handleImageChange}></input>
                <label htmlFor='price'>Price:</label>
                <input type="text" id="price" value={price} onChange={handlePriceChange}></input>
                <label htmlFor='days'>Days</label>
                <input type="text" id="days" value={days} onChange={handleDaysChange}></input>
                <button className='submit' type='submit'>Add Tour</button>
            </form>
        </section>
    )
}

export default AddTour
