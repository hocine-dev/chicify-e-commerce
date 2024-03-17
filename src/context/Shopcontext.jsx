import React, { createContext, useState } from "react";
import allProducts from "../components/assets/all_product";

export const shopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};

  for (let index = 0; index < allProducts.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCard())


  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextValue = { allProducts ,cartItems,addToCart,removeFromCart};



  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
