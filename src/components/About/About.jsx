import React from 'react'
import './About.css'
import about_img from '../../assets/aboutimg.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'></img>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-left">
            <h3>About Me</h3>
            <h2>Coding is a Wonderful Avenue</h2>
            <p>In conclusion, coding is a powerful tool that empowers individuals to shape the digital landscape. It requires patience, problem-solving skills, and a creative mindset. As technology continues to evolve at a rapid pace, so does the art of coding. Embracing coding opens up a world of possibilities, allowing us to turn our ideas into reality and create the future we envision.</p>    
        </div>
    </div>
  )
}

export default About