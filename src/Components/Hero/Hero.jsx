import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Where Knowledge Meets Opportunity and Growth </h1>
            <p>Our curriculum blends academic excellence with industry relevance, fostering innovation, critical thinking, practical experience, and leadership—preparing students to excel in today’s dynamic, real-world environments</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div> 
  )
}

export default Hero