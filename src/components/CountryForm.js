import React from 'react'
import { useState } from 'react'

const CountryForm = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        setName("")
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add A New Country!</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" value={name} onChange={handleChange}></input>
                <input type="submit" value="Submit" className="form-btn" />
            </form>

        </section>
    )
}

export default CountryForm
