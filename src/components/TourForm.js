import React, { useState } from 'react'

const TourForm = () => {
    const [name, setName] = useState('')
    const [image_url, setImage_url] = useState('')
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')

    const resetForm = () => { }
    const handleSubmit = (e) => { }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Tour !</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name"></input>
                <label htmlFor='image'>Image:</label>
                <input type="text" id="image"></input>
                <label htmlFor='price'>Price:</label>
                <input type="text" id="price"></input>
                <label htmlFor='days'>Days</label>
                <input type="text" id="days"></input>
                <button className='submit' type='submit'>Add Tour</button>
            </form>
        </section>
    )
}

export default TourForm
