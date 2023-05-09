import React from 'react'
import { useState } from 'react'

const CountryForm = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/countries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        })
            .then((resp => resp.json())
                .then((data) =>
                    console.log(data)
                )
            )
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Country!</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" value={name} onChange={handleChange}></input>
                <input type="submit" value="Submit" className="form-btn" />
            </form>

        </section>
    )
}

export default CountryForm
