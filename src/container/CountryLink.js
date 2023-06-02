import React from 'react'
import { Link } from 'react-router-dom'

const CountryLink = ({ country }) => {
    return (
        <div>
            <Link to={`/countries/${country.id}`}>
                <br />
                <div className='countries'>
                    <h3>

                        <li>{country.name}</li>

                    </h3>
                </div>

            </Link>
        </div>
    )
}

export default CountryLink
