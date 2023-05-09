import React, { useState } from 'react'

const TourForm = () => {
    const [name, setName] = useState('')
    const [image_url, setImage_url] = useState('')
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')

    // const resetForm = () => { }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)

    }
    const handleChange = (e) => {
        setName(e.target.value)
        setImage_url(e.target.value)
        setPrice(e.target.value)
        setDays(e.target.value)

    }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Tour !</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" value={name} onChange={handleChange}></input>
                <label htmlFor='image'>Image:</label>
                <input type="text" id="image" value={image_url} onChange={handleChange}></input>
                <label htmlFor='price'>Price:</label>
                <input type="text" id="price" value={price} onChange={handleChange}></input>
                <label htmlFor='days'>Days</label>
                <input type="text" id="days" value={days} onChange={handleChange}></input>
                <button className='submit' type='submit'>Add Tour</button>
            </form>
        </section>
    )
}

export default TourForm
