import React from 'react'
import './offers.css'
import exclusive from '../assets/ex.webp'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1><h2>Offers For You</h2>
            <p>Only On Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="exclusive" />
        </div>
    </div>
  )
}

export default Offers