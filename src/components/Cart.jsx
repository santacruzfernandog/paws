import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../firebase'

const Cart = () => {

    const { cart, removeItem, clear } = useContext(CartContext)
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrecio, setTotalPrecio] = useState(0)

    const generarOrden = () => {
        const db = getFirestore()
        const ordersCollection = db.collection('orders')
        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = {name: 'Fernando', phone:1522336699, email:'fernando@prueba.com'}
        orden.total = totalPrecio
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.title
            const price = cartItem.item.price * cartItem.quantity

            return {id, title, price}
        })

        ordersCollection.add(orden)
        .then((idDocument)=>{console.log(idDocument.id)})
        .catch(error => {console.log(error)})
        .finally(() => {console.log('Promesa concluida')})

        //Actualizar stock en firebase
        for (let cartItem of cart){
            const docRef = db.collection('items').doc(cartItem.item.id)
            docRef.update({
                stock: cartItem.item.stock - cartItem.quantity
            })
        }

    }

    useEffect( ()=>{
        let countPrecio = 0
        let countItem = 0
        for(let cartItem of cart){
            countItem += cartItem.quantity
            countPrecio += cartItem.quantity * cartItem.item.price
        }

        setTotalItems(countItem)
        setTotalPrecio(countPrecio)
    } ,[cart])


    return (
        <div>

            {
                !cart.length ?
                <h2>No hay items en el carrito.
                    <Link to="/">Volver al Home</Link>
                </h2> : (
                    <>
                    {
                        cart.map(elem => 
                            <div key={elem.item.id}>
                                <div>
                                    Titulo: {elem.item.title}
                                </div>
                                <div>
                                    Cantidad: {elem.quantity}
                                </div>
                                <button onClick={() => removeItem(elem.item.id) }>
                                    Borrar
                                </button>
                            </div>
                        )
                    }

                        <div>
                            Total: {totalItems} y {totalPrecio}
                        </div>
                        <button onClick={clear}>
                            Borrar todo
                        </button>
                        <button onClick={generarOrden}>Finalizar Compra</button>
                    </>
                )
            }
        </div>
    )
}

export default Cart
