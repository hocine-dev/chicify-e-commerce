import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
import Pinterest from '../assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-logo">
            <img src={logo} alt="footer" />
        </div>
        <div className="footer-links">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offics</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-social">
            <div className="footer-icons">
                <img src={instagram} alt="instagram" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={Pinterest} alt="Pinterest" />
            </div>
        </div>
        <div className="copy">
            
            <p>Copyright @ 2024 Made By <a href="https://hocinedev.vercel.app/" target='blank'>Hocine dev</a></p>
        </div>
    </div>
  )
}

export default Footer