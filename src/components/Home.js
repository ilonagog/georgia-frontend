import React from 'react'
import video from "../assets/Video.mp4"
import video1 from '../assets/Video1.mp4'


const Home = () => {
    return (
        <section className='home'>
            <h2>Welcome to the tour page.</h2>
            <div className='overlay'></div>
            <br />
            <div className="video-wrapper">
                <video className='video' src={video1} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='video' src={video} muted autoPlay loop type="video/mp4"></video>
            </div>
        </section>
    )
}
export default Home