import React from 'react'
import video from "../assets/Video.mp4"

const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <h2>Welcome! Choose Country Tours</h2>
            {/* <div className='overlay'></div> */}
            <video className='video' src={video} muted autoPlay loop type="video/mp4"></video>
        </section>


    )
}
export default Home
