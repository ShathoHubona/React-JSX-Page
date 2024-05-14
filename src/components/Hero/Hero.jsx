import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>If you can dream it, DO IT</h1>
            <p>Out of the night that covers me, Black as the pit from pole to pole, I thank whatever gods may be For my unconquerable soul.</p>
            <button className='btn'>Explore More<img src={dark_arrow} alt=''></img></button>
        </div>
    </div>
  )
}

export default Hero