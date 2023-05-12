
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tour from '../components/Tour'
import { Link } from 'react-router-dom'

const Country = () => {
    const [country, setCountry] = useState({
        tours: []
    })
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/countries/${params.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }, [])

    const tours = country.tours.map(tour => <Tour key={tour.id} tour={tour} />)

    return (
        <div>
            <Link to={`/countries/${params.id}/tour/new`}>
                <button className="form-link" >Add Tours</button>
            </Link>
            <h1>{country.name}</h1>
            <h3>Tours: {tours}</h3>
        </div>
    )
}

export default Country
