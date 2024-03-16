import React, { useContext } from 'react'
import { shopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/relatedProducts/RelatedProducts'


const Product = () => {
  const {allProducts} = useContext(shopContext)
  const {ProductId} = useParams()
  const product = allProducts.find((e)=> e.id === Number(ProductId))

  return (
    <div>
<Breadcrumbs product={product}/>
<ProductDisplay product={product}/>
<DescriptionBox/>
<RelatedProducts/>

    </div>
  )
}

export default Product