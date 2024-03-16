import React, { createContext } from 'react'
import allProducts from '../components/assets/all_product'



export const shopContext = createContext(null)

const ShopContextProvider = (props) => {

    const contextValue = {allProducts}

    return <shopContext.Provider value={contextValue}>

        {props.children}
        
    </shopContext.Provider>
}

export default ShopContextProvider