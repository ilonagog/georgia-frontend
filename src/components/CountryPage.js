import React from 'react'
import { Link } from 'react-router-dom'

const CountryPage = ({ country }) => {
    return (
        <div>

            <Link to={`/countries/${country.id}`}>
                <h3>{country.name}</h3>
            </Link>
            <Link></Link>
            {/* <Link to={'/countryform'}>
                <button className='form-link'>Add New Country !</button>
            </Link> */}
        </div>
    )
}

export default CountryPage