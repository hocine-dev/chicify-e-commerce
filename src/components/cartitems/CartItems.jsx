import React, { useContext } from 'react'

import './CartItems.css'
import { shopContext } from '../../context/Shopcontext'
import removeIcon from '../assets/cart_cross_icon.png'

const CartItems = () => {


    const {GetTotal,allProducts,cartItems,removeFromCart} = useContext(shopContext)
  return (
    <div className='CartItems'>
<div className="main">
<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr />
{allProducts.map((item) =>{
    if(cartItems[item.id] > 0){
        return <div>
        <div className="format main">
            <img src={item.image} alt={item.image} className="icon" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className='qty'>{cartItems[item.id]}</button>
            <p>${item.new_price * cartItems[item.id]} </p>
            <img  className="removeIcon" src={removeIcon} alt="remove icon" onClick={()=>{removeFromCart(item.id)}} />
        </div>
        <hr />
    </div>
    }else{return null}
})}
<div className="down">
    <div className="total">
        <h1>Cart Totals</h1>
        <div>
            <div className="total-items">
                <p>Sub Total</p>
                <p>${GetTotal()}</p>
            </div>
            <hr />
            <div className="total-items">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="total-items">
                <h3>Total</h3>
                <h3>${GetTotal()}</h3>
            </div>
        </div>
        <button>Proceed To Payment</button>
    </div>
    <div className="promo">
        <p>If You Have A Promo Code Enter It Here</p>
        <div className="promo-box">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
    </div>
</div>
</div>
    
  )
}

export default CartItems