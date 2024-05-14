import React from 'react'
import './Hobbies.css'
import image_1 from '../../assets/img1.jpg'
import image_2 from '../../assets/img2.jpg'
import image_3 from '../../assets/img3.jpg'
import icon_1 from '../../assets/icon1.png'
import icon_2 from '../../assets/icon2.png'
import icon_3 from '../../assets/icon3.png'

const Hobbies = () => {
  return (
    <div className='hobbies'>
        <div className='hobby'>
            <img src={image_1} alt=''></img>
            <div className='caption'>
                <img src={icon_1} alt=''></img>
                <h3>BASKETBALL</h3>
                <p>You can't win unless you learn how to lose.</p>
            </div>
        </div>
        <div className='hobby'>
            <img src={image_2} alt=''></img>
            <div className='caption'>
                <img src={icon_2} alt=''></img>
                <h3>PHYSICS</h3>
                <p>Everything should be made as simple as possible.</p>
            </div>
        </div>
        <div className='hobby'>
            <img src={image_3} alt=''></img>
            <div className='caption'>
                <img src={icon_3} alt=''></img>
                <h3>RAP</h3>
                <p>Reach for the stars so if you fall you land on clouds.</p>
            </div>
        </div>
    </div>
  )
}

export default Hobbies