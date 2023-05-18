import React from 'react'
import CountryPage from './CountryPage'
import { Link } from 'react-router-dom'
import NewCountry from './NewCountry'

const Countries = ({ countries }) => {


    const countriesList = countries.map(country => <CountryPage key={country.id} country={country} />)
    return (
        <div>
            <ul>{countriesList}</ul>
            <Link to={'/country/new'}>
                <button className='form-link'>Add Country !</button>
            </Link>
            {/* <NewCountry /> */}
        </div>
    )
}

export default Countries
