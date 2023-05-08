import React from 'react'
import { Link } from 'react-router-dom'

const CountryLink = ({ country }) => {
    return (
        <div>
            <Link to={`/countries/${country.id}`}>
                <h3>{country.name}</h3>
            </Link>
        </div>
    )
}

export default CountryLink