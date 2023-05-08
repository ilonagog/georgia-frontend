
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tour from '../components/Tour'

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

    const tours = country.tours.map(t => <Tour key={t.id} tour={t} />)

    return (
        <div>
            <h1>{country.name}</h1>
            <h3>Tours: {tours}</h3>
        </div>
    )
}

export default Country
