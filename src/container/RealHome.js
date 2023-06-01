import React from 'react'
import georgia from '../assets/Georgia.mp4'
import england from "../assets/England.mp4"
import italy from '../assets/Italy.mp4'
import spain from '../assets/Spain.mp4'
import china from "../assets/China.mp4"
import greece from '../assets/Greece.mp4'
import france from '../assets/France.mp4'
import germany from '../assets/Germany.mp4'
import portugal from "../assets/Portugal.mp4"
import iceland from '../assets/Iceland.mp4'
import japan from '../assets/Japan.mp4'
import scotland from '../assets/Scotland.mp4'
import canada from "../assets/Canada.mp4"





const RealHome = () => {
    return (
        <div className='home'>
            <h2>Welcome to the tour page.</h2>
            <br />
            <div className="videoContainer">
                <video className='videos' src={georgia} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={england} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={italy} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={spain} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={china} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={greece} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={france} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={germany} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={portugal} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={iceland} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={japan} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={scotland} muted autoPlay loop type="video/mp4"></video>
                <br />
                <video className='videos' src={canada} muted autoPlay loop type="video/mp4"></video>
            </div>
        </div>
    )
}
export default RealHome
