import React from 'react'
import './RelatedProducts.css'
import p_data from '../assets/data' 
import Item from '../items/item'

const RelatedProducts = () => {
  return (
    <div className='RelatedProducts'>
        <h1>Related Products </h1>
        <hr />
        <div className="related-item">
            {p_data.map((item,i)=>{ return <Item
                          key={i}
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          new_price={item.new_price}
                          old_price={item.old_price}/>})}
        </div>
    </div>
  )
}

export default RelatedProducts