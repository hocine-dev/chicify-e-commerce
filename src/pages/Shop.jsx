import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollections from '../components/newcollections/New_collections'
import NewsLetter from '../components/newletter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop