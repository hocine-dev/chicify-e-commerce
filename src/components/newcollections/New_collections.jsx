import React from 'react'
import './new_collections.css'
import new_collection from '../assets/new_collections'
import Item from "../items/item";


const NewCollections = () => {
  return (
    <div className='new_collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">

        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}

        </div>
    </div>
  )
}

export default NewCollections