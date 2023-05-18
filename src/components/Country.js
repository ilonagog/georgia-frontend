
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tour from '../components/Tour'
import { Link } from 'react-router-dom'

const Country = ({ countries, setCountries }) => {
    const [country, setCountry] = useState({
        tours: []
    })
    const { id } = useParams()

    useEffect(() => {
        const singleCountry = countries.find(obj => obj.id === parseInt(id))
        setCountry(singleCountry)
    }, [countries])
    //     fetch(`http://localhost:9292/countries/${id}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //             setCountry(data)
    //         })
    // }, [])

    // const addTour = (tour) => {
    //     const updatedCountry = { ...country, tours: [...country.tours, tour] }
    //     const newTours = [...country.tours, tour]
    //     country.tours = newTours
    //     setCountry(updatedCountry)
    // }
    const handleDeleteTour = (deletedTour) => {
        const updatedTour = tours.filter((tour) => tour.id !== deletedTour.id)
        return updatedTour
    }

    const tours = country.tours.map(tour => <Tour key={tour.id} tour={tour} onDeleteTour={handleDeleteTour} />)

    const onDeleteCountry = (id) => {
        setCountries(prevCountries => {
            const filteredArray = prevCountries.filter((country) => country.id !== id)
            return filteredArray
        })

    }
    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/countries/${country.id}`, {
            method: "DELETE"
        })
            .then((resp => resp.json()))
            .then(() => onDeleteCountry(country))
    }



    return (
        <div>
            <Link to={`/countries/${id}/tour/new`}>
                <button className="form-link" >Add Tours</button>
            </Link>
            <h1>{country.name}</h1>
            <footer>
                <button className="delete" onClick={handleDeleteClick}>🚮</button>
            </footer>

            <h3>Tours: {tours}</h3>
        </div>
    )
}

export default Country



// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import Tour from '../components/Tour'
// import { Link } from 'react-router-dom'

// const Country = () => {
//     const [country, setCountry] = useState({
//         tours: []
//     })
//     const { id } = useParams()

//     useEffect(() => {
//         fetch(`http://localhost:9292/countries/${id}`)
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log(data)
//                 setCountry(data)
//             })
//     }, [])
//     const tours = country.tours.map(tour => <Tour key={tour.id} tour={tour} />)

//     return (
//         <div>
//             <Link to={`/countries/${id}/tour/new`}>
//                 <button className="form-link" >Add Tours</button>
//             </Link>
//             <h1>{country.name}</h1>
//             <h3>Tours: {tours}</h3>
//         </div>
//     )
// }

// export default Country