import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="new-price">${props.new_price}</div>
            <div className="old-price">${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item