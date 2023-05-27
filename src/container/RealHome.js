import React from 'react'
import video from "../assets/Video.mp4"
import video1 from '../assets/Video1.mp4'
import video2 from '../assets/Video2.mp4'
import video3 from '../assets/Video3.mp4'


const RealHome = () => {
    return (
        <div className='home'>
            <h2>Welcome to the tour page.</h2>
            <br />
            <div className="videoContainer">
                <video className='video' src={video1} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='video' src={video} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='video' src={video2} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='video' src={video3} muted autoPlay loop type="video/mp4"></video>
            </div>
        </div>
    )
}
export default RealHome
