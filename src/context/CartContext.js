// logica del carrito de compras

import { createContext, useState } from "react";

const CartContext = createContext ()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useState ([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd)){
        setCart([...cart, productToAdd])
    }else{
        const newProducts = cart.map(prod => {
            if(prod.id === productToAdd.id){
                const newProducts = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return newProducts
            }else{
                return prod
            }
        })
        setCart(newProducts)
    }
}


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext