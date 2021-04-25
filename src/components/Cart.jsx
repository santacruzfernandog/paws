import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../firebase'

const Cart = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState(null)
    const [showForm, setShowForm] = useState(false)


    const { cart, removeItem, clear } = useContext(CartContext)
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrecio, setTotalPrecio] = useState(0)

    const generarOrden = (e) => {
        e.preventDefault()
        const comprador = { name, phone, email }

        const db = getFirestore()
        const ordersCollection = db.collection('orders')
        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = comprador
        orden.total = totalPrecio
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.title
            const price = cartItem.item.price * cartItem.quantity

            return {id, title, price}
        })

        ordersCollection.add(orden)
        .then((doc)=>{setIdOrder(doc.id)})
        .catch(error => {console.log(error)})
        .finally(() => {console.log('Orden generada')})


        //Actualizar stock en firebase
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
        )

        const batch = db.batch();

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
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
        <div className="container-fluid">
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
                                <button className="btn btn-primary btn-sm" onClick={() => removeItem(elem.item.id) }>
                                    Borrar
                                </button>
                            </div>
                        )
                    }

                        <div>
                            Total: {totalItems} y {totalPrecio}
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={clear}>
                            Borrar todo
                        </button>
                        <button className="btn btn-warning btn-sm" onClick={()=> {setShowForm(!showForm)}}>Finalizar Compra</button>

                        {
                            showForm ? (
                                <form onSubmit={generarOrden} className="mt-5">
                                    <div className="form-row">
                                        <div className="col-md-3">
                                            <label htmlFor="userName">Nombre</label>
                                            <input className="form-control" type="text" id="userName" value={name} onChange={ (e)=> setName(e.target.value) }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-3 mt-2">
                                            <label htmlFor="userPhone">Telefono</label>
                                            <input className="form-control" type="text" id="userPhone" value={phone} onChange={ (e)=> setPhone(e.target.value) }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-3 mt-2">
                                            <label htmlFor="userEmail">Email</label>
                                            <input className="form-control" type="text" id="userEmail" value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary mt-3" type="submit">Generar Orden</button>
                                </form>
                            ) : null
                        }
                    </>
                )
            }

            {
                idOrder ? (
                    <div className="alert alert-success alert-dismissible fade show mt-5 h5" role="alert">
                        Orden de compra generada correctamente!<br/>
                        <strong>ID de orden: {idOrder}</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Cart
