import React, { createContext, useState } from "react";
import allProducts from "../components/assets/all_product";

export const shopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};

  for (let index = 0; index < allProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCard());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const GetTotal = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find((p) => p.id === Number(item));
        if (itemInfo) {
          total += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return total;
  };

  const GetTotalItems = () => {
    let Total = 0;

    for (const item in cartItems) {
      
     
        Total += cartItems[item];
      
     
    }
    return Total;
  };

  const contextValue = {
    GetTotalItems,
    GetTotal,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
