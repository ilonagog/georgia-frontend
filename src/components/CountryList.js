
import React from 'react'
import CountryCard from './CountryCard'


const CountryList = ({ countries, setCountries}) => {
    const displayCountry = countries.map((singleCountry) => <CountryCard key={singleCountry.id} singleCountry={singleCountry} setCountries={setCountries} />)
    return (
        <div className='container'>
            {displayCountry}

        </div>
    )
}

export default CountryList