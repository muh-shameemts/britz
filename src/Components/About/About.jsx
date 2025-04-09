import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {

    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sit illo, quo esse praesentium repellendus laborum delectus fuga optio necessitatibus numquam quae harum, ducimus quasi iusto corrupti eius explicabo pariatur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate amet numquam vero, accusantium dolor omnis rem, quis facere quam id obcaecati ipsam, itaque maxime exercitationem magnam minus reprehenderit illum dicta.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eaque veniam doloribus aut, porro, odit vero accusantium ipsa modi nulla delectus laudantium minus nisi quas pariatur fugit laborum. Iusto, voluptatibus!</p>
            </div>
        </div>
    )
}

export default About
