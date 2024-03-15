import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our News Letter And Stay Updated</p>
        <div>
            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
            <button type="submit">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter