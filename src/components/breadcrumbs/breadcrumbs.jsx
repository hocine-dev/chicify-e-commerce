import React from 'react'
import './breadcrumbs.css'
import arrowIcon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {

    const {product} = props;
    
  return (

    
    <div className='breadcrumbs'>
        HOME <img src={arrowIcon} alt="arrowIcon" /> SHOP <img src={arrowIcon} alt="arrowIcon" />
        {product.category} <img src={arrowIcon} alt="arrowIcon" /> {product.name} 
    </div>
  )
}

export default Breadcrumbs