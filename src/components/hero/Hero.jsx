import React from 'react'
import './hero.css'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Welcome to Chicify - Where Style Meets Simplicity</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Stay</p>
                    
                </div>
                <p>Ahead</p>
                <p>of the Trends</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt="arrow icon" />

            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt="hero" />
        </div>
    </div>
  )
}

export default Hero