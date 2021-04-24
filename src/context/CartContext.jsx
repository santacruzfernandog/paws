import React from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])

    const addItem = (newItem, newQuantity)=>{

        const prevCartItem = cart.find( elem => elem.item.id === newItem.id)

        let newCart = null;
        let quant = 0;
        if(prevCartItem){
            newCart = cart.filter(elem => elem.item.id !== newItem.id)
            quant = prevCartItem.quantity + newQuantity
        } else {
            newCart = [...cart]
            quant = newQuantity
        }

        setCart([...newCart,
                { item: newItem, quantity: quant }])
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) => {
        const newCart = cart.filter( elem => elem.item.id !== itemId)
        setCart(newCart)
    } // Remover un item del cart por usando su id

    const clear = () => {
        setCart([])
    } // Remover todos los items

    const isInCart = (id) => {
        const currentItem = cart.find( elem => elem.item.id === id )

        return currentItem ? true : false
    }
    

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>{children}</CartContext.Provider>
}