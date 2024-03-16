import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { shopContext } from '../context/Shopcontext'
import dropDown from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item'

const ShopCategory = (props) => {

  const {allProducts} = useContext(shopContext)
  return (
    <div className='ShopCategory'>

<div className="shopCategory-banner">
<img src={props.banner} alt={props.category} />
</div>
<div className="index-cat">
  <p><span>Showing 1-12</span> out of 36 Products</p>
  <div className="sort">
    Sort by <img src={dropDown} alt="dropDown" />
  </div>
</div>
<div className="products">
  {allProducts.map((item,i)=>{
    if(props.category === item.category){return <Item key={i}
    id={item.id}
    name={item.name}
    image={item.image}
    new_price={item.new_price}
    old_price={item.old_price}/>} else{return null}
  })}
</div>

<div className="more">
  Show More
</div>
    </div>
  )
}

export default ShopCategory