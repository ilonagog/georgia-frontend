import React, { useState } from 'react'


const TourForm = ({ addATour, country }) => {


    const [name, setName] = useState('')
    const [image_url, setImage_url] = useState('')
    const [price, setPrice] = useState('')
    const [days, setDays] = useState('')



    const handleNameChange = (e) => {
        setName(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // const newTour = {
        //     ...tour,
        //     country_id: country.id
        // }
        const newTour = {

            name: name,
            image_url: image_url,
            price: price,
            days: days,
            country_id: country.id,
        }
        addATour(newTour)
    }

    const handleImageChange = (e) => {
        setImage_url(e.target.value)
        // setTour({
        //     [e.target.image_url]: e.target.value
        // })
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
        // setTour
        //     ({
        //         [e.target.price]: e.target.value
        //     })
    }
    const handleDaysChange = (e) => {
        setDays(e.target.value)
        // setTour({
        //     [e.target.days]: e.target.value
        // })
    }


    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Add New Tour !</h3>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" value={name} onChange={handleNameChange} />
                <label htmlFor='image'>Image:</label>
                <input type="text" image_url="image" value={image_url} onChange={handleImageChange} />
                <label htmlFor='price'>Price:</label>
                <input type="text" price="price" value={price} onChange={handlePriceChange} />
                <label htmlFor='days'>Days</label>
                <input type="text" days="days" value={days} onChange={handleDaysChange} />
                {/* <button className='submit' type='submit'>Add Tour</button> */}
                <input type='submit' />
            </form>
        </section>
    )
}

export default TourForm


// import React from 'react'
// import { useState } from 'react'

// const TourForm = ({ addATour, country }) => {
//     const [tour, setTour] = useState({
//         name: '',
//         image_url: '',
//         price: '',
//         days: ''
//     })
//     // const [name, setName] = useState('')
//     // const [image_url, setImage_url] = useState('')
//     // const [price, setPrice] = useState('')
//     // const [days, setDays] = useState('')

//     const handleNameChange = (e) => {
//         setTour({
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleImageChange = (e) => {
//         setTour({
//             [e.target.image_url]: e.target.value
//         })
//     }
//     const handlePriceChange = (e) => {
//         setTour({
//             [e.target.price]: e.target.value
//         })
//     }
//     const handleDaysChange = (e) => {
//         setTour({
//             [e.target.days]: e.target.value
//         })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const newTour = {
//             ...tour,
//             country_id: country.id
//         }
//         addATour(newTour)
//         // setTour(newTour)
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input name='name' value={tour.name} onChange={handleNameChange} type="text" />
//                 <label>Image</label>
//                 <input name='image' value={tour.image_url} onChange={handleImageChange} type="text" />
//                 <label>Price</label>
//                 <input name='price' value={tour.price} onChange={handlePriceChange} type="text" />
//                 <label>Days</label>
//                 <input name='days' value={tour.days} onChange={handleDaysChange} type="text" />
//                 <input type="submit" />
//             </form>

//         </div>
//     )
// }

// export default TourForm
