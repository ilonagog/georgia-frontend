import React from 'react'
import { useState } from 'react'

const CountryForm = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => { }
    const handleChange = () => { }
    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Country!</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name"></input>
                <input type="submit" value="Submit" className="form-btn" />
            </form>

        </section>
    )
}

export default CountryForm
