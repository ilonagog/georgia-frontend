import React from 'react'
import CountryForm from './CountryForm'
import CountryLink from './CountryLink'
import { useState } from 'react'

const Countries = ({ countries, setCountries }) => {
    const [viewAddForm, setViewAddForm] = useState(false)

    const handleClick = (e) => {
        setViewAddForm(true)
    }

    const addCountry = (country) => {

        fetch("http://localhost:9292/countries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: country.name,
                image_url: country.image_url,
                price: country.price,
                days: country.days
            })
        })
            .then((resp) => resp.json())
            .then(data => {
                console.log(data)
                setCountries([...countries, data]);
            })
        setViewAddForm(false)
    }
    const countriesList = countries.map(c => <CountryLink key={c.id} country={c} />)
    return (
        <div className='conteiner'>
            <ul>{countriesList}</ul>
            {viewAddForm ?
                <CountryForm addACountry={addCountry} />
                :
                <button className="button" onClick={handleClick}>Add Country!</button>
            }
        </div>
    )
}

export default Countries
