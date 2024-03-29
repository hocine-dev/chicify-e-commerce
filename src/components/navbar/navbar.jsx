import React, { useContext, useRef, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import dropDown from '../assets/hambo.png'
import { Link } from 'react-router-dom'
import { shopContext } from '../../context/Shopcontext'

const Navbar = () => {
    const [Menu,setMenu] = useState('')
    const {GetTotalItems} = useContext(shopContext)
    const menuRef = useRef()
    const dropDownToggle = (e)=>{
menuRef.current.classList.toggle('show')
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
           <Link to='/'> <img src={logo} alt="logo" /></Link>
        </div>
        <img onClick={dropDownToggle} src={dropDown} className='navDropDown' alt="nav drop down" />
        <ul className="nav-menu"  ref={menuRef} >
            <li onClick={()=>{setMenu('shop')}}> <Link to='/'>Shop</Link> {Menu === 'shop'? <hr/>:null}</li>
            <li onClick={()=>{setMenu('men')}}> <Link to='/men'>Men</Link>  {Menu === 'men'? <hr/>:null}</li>
            <li onClick={()=>{setMenu('women')}}><Link to='/women'>Women</Link>  {Menu === 'women'? <hr/>:null}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link> {Menu === 'kids'? <hr/>:null}</li>
        </ul>
        <div className="nav-login-cart">
        <Link onClick={()=>{setMenu('')}} to='/login'><button>Login</button></Link>
        <Link to='/cart' onClick={()=>{setMenu('')}}><img src={cart} alt="cart icon" /></Link>
            
            
            <div className="counter">{GetTotalItems()}</div>
        </div>

    </div>
  )
}

export default Navbar