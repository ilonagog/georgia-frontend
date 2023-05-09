import React from 'react'
import CountryPage from './CountryPage'
import { Link } from 'react-router-dom'

const Countries = ({ countries }) => {

    // const [countries, setCountries] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/countries')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //             setCountries(data)
    //         })
    // }, [])
    const countriesList = countries.map(country => <CountryPage key={country.id} country={country} />)
    return (
        <div>
            <ul>{countriesList}</ul>
            <Link to={'/countryform'}>
                <button className='form-link'>Add Country !</button>
            </Link>

        </div>
    )
}

export default Countries
