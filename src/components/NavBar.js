import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <nav>
                <div className='navigation'>
                    <Link className='navLink' to="/">Home</Link>
                    <Link className='navLink' to="/countries">Countries</Link>
                    <Link className='navLink' to='/countries/new'>Add Country</Link>
                    <Link className='navLink' to="/contact">About</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar



