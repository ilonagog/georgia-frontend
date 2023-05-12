import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav>
                <div className='navigation'>
                    <Link className='navLink' to="/">Home</Link>
                    <Link className='navLink' to="/countries">Countries</Link>
                    <Link className='navLink' to="/contact">Contact</Link>
                </div>
            </nav>

        </>
    )
}

export default NavBar
