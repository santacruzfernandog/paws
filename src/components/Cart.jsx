import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../firebase'
import AlertOrder from './AlertOrder'

const Cart = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [formCompleted, setFormCompleted] = useState(true)
    const [idOrder, setIdOrder] = useState(null)

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

        if(name && phone && email && email && email === email2){
            setFormCompleted(false)
        }else{
            setFormCompleted(true)
        }

        setTotalItems(countItem)
        setTotalPrecio(countPrecio)
    } ,[cart, name, phone, email, email2])


    return (
        <div className="container-fluid my-5">
            <div className="">
                
                {
                    idOrder ? (
                        <AlertOrder idCompra={idOrder} />
                    ) : null
                }

                {
                    !cart.length ?
                    <h2 className="text-center">No hay items en el carrito,
                        <Link to="/" className="ml-2">volver al Inicio</Link>
                    </h2> : (
                        <>
                            <div className="d-flex justify-content-center align-items-center mb-5">
                                <span className="text-center text-warning text-capitalize lobster-font h1 mr-2">Awesome Pets:</span>
                                <span className="text-secondary h1">Items en Carrito</span>
                            </div>
                            {
                                cart.map(elem => 
                                            
                                    <div class="col-md-4 mx-auto">
                                        <div class="card border border-warning mb-2">
                                            <div class="row no-gutters">
                                                <div class="col-md-3 d-flex align-items-center justify-content-center">
                                                    <img src={elem.item.picture} alt="" class="img-fluid"/>
                                                </div>
                                                    <div id="" class="card-body p-0 pl-2 pt-2">
                                                        <h4 class="text-center">{elem.item.title}</h4>
                                                        <h5 className="text-center"><span>Precio: </span>$ {elem.item.price}.-</h5>
                                                        <h5 className="text-center"><span>Cantidad: </span>{elem.quantity}</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center m-2">
                                                        <button class="btn btn-danger btn-sm" onClick={() => removeItem(elem.item.id) }>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="col-md-4 mx-auto">
                                <div className="card card-body border border-info">
                                    <h5 className="m-0"><span>Cantidad total:</span><span className="float-right h4">{totalItems} Items</span></h5>
                                    <h5 className="m-0"><span>Total a Pagar:</span><span className="float-right h4">$ {totalPrecio}.-</span></h5>
                                </div>
                                <div className="col-md-4 d-flex mx-auto mt-5 btn-group-vertical p-0">
                                    <button className="btn btn-danger" onClick={clear}>
                                        Borrar Todo
                                    </button>
                                    <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                                        Finalizar Compra
                                    </button>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Dejanos tus datos de contacto, por favor</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={generarOrden} class="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col">
                                                        <label htmlFor="userName">Nombre</label>
                                                        <input
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                            id="userName"
                                                            placeholder="Ingresa tu nombre"
                                                            value={name}
                                                            onChange={ (e)=> setName(e.target.value) }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col mt-2">
                                                        <label htmlFor="userPhone">Telefono</label>
                                                        <input
                                                            required
                                                            className="form-control"
                                                            type="number"
                                                            id="userPhone"
                                                            placeholder="Ingresa tu telefono"
                                                            value={phone}
                                                            onChange={ (e)=> setPhone(e.target.value) }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col mt-2">
                                                        <label htmlFor="userEmail">Email</label>
                                                        <input
                                                            required
                                                            className="form-control"
                                                            type="email"
                                                            id="userEmail"
                                                            placeholder="Ingresa tu Email"
                                                            value={email}
                                                            onChange={ (e)=> setEmail(e.target.value) }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col mt-2">
                                                        <label htmlFor="userEmail">Confirma tu email</label>
                                                        <input
                                                            required
                                                            className="form-control"
                                                            type="email"
                                                            id="userEmail2"
                                                            placeholder="Ingresa tu Email"
                                                            value={email2}
                                                            onChange={ (e)=> setEmail2(e.target.value) }
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">
                                                        Cerrar
                                                    </button>
                                                    <button type="submit" className="btn btn-primary btn-sm" disabled={ formCompleted/* !name || !phone || !(email === email2 ) */ }>
                                                        Confirmar Compra
                                                    </button>
                                                </div>
                                            </form>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Cart
