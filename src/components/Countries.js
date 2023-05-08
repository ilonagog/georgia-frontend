import React, { useState, useEffect } from 'react'
import CountryLink from './CountryLink'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/countries')
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCountries(data)
            })
    }, [])
    const countriesList = countries.map(c => <CountryLink key={c.id} country={c} />)
    return (
        <div>
            <ul>{countriesList}</ul>

        </div>
    )
}

export default Countries
