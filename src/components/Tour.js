import React, { useState } from 'react'
//mport { useParams } from 'react-router-dom'

const Tour = ({ tour, onUpdatedTour, handleTourDelete }) => {
    const [viewEdit, setViewEdit] = useState(false)
    const [name, setName] = useState(tour.name)
    const [image_url, setImage] = useState(tour.image_url)
    const [price, setPrice] = useState(tour.price)
    const [days, setDays] = useState(tour.days)

    // const params = useParams()

    function handleClick() {
        setViewEdit((viewEdit) => !viewEdit)
    }

    function handleSubmit(e) {
        // console.log("submitted")
        e.preventDefault()
        const newT = {
            name: name,
            image_url: image_url,
            price: price,
            days: days
        }

        fetch(`http://localhost:9292/tours/${tour.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newT)
        })
            .then((resp) => resp.json())
            .then((updatedTour) => {
                onUpdatedTour(updatedTour)

                setViewEdit(false)
            })

    }


    const handleDeleteClick = (id) => {
        fetch(`http://localhost:9292/tours/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then(() => {
                console.log(tour.id)
                handleTourDelete(tour)
            }

            )
    }
    return (
        <div>
            {viewEdit ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></p>
                        <p>Image: <input image={image_url} onChange={(e) => setImage(e.target.value)} value={image_url} placeholder={image_url} type="text" /></p>
                        <p>Price: <input price={price} onChange={(e) => setPrice(e.target.value)} value={price} placeholder={price} type="text" /></p>
                        <p>Days: <input days={days} onChange={(e) => setDays(e.target.value)} value={days} placeholder={days} type="text" /></p>
                        <button type="submit"> Save Changes </button>
                    </form>
                </div>
            ) :
                <div>
                    <p>Name: {tour.name}</p>
                    <img src={tour.image_url} alt={tour.image_url} />
                    <p>Price: $ {tour.price}</p>
                    <p>Days: {tour.days}</p>
                </div>
            }
            <button className="button" onClick={handleClick} >Edit tour description</button>
            <button className='button' onClick={handleDeleteClick}>Delete tour</button>
        </div>
    )
}


export default Tour

