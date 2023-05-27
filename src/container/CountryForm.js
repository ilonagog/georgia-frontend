import React from 'react'
import { useState } from 'react'

const CountryForm = ({ addACountry }) => {
    const [country, setCountry] = useState({
        name: ""
    })
    const handleChange = (e) => {
        setCountry({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addACountry(country)
    }
 
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Country!</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" value={country.name} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CountryForm