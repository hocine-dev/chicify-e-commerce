import React, { useContext } from 'react'

import './CartItems.css'
import { shopContext } from '../../context/Shopcontext'
import removeIcon from '../assets/cart_cross_icon.png'

const CartItems = () => {


    const {allProducts,cartItems,removeFromCart} = useContext(shopContext)
  return (
    <div className='CartItems'>
<div className="main">
<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
<hr />
{allProducts.map((item) =>{
    if(cartItems[item.id] > 0){
        return <div>
        <div className="format">
            <img src={item.image} alt={item.image} className="icon" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className='qty'>{cartItems[item.id]}</button>
            <p>{item.new_price * cartItems[item.id]} </p>
            <img src={removeIcon} alt="remove icon" onClick={()=>{removeFromCart(item.id)}} />
        </div>
        <hr />
    </div>
    }else{return null}
})}
</div>
    </div>
  )
}

export default CartItems