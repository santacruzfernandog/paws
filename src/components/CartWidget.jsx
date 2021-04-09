import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const CartWidget = (props) => {

    const nombre = useContext(MyContext)

    return (
        <div className="d-flex flex-column">
            <Link to={''} className="mx-auto" href="#"><i className="fas fa-shopping-cart fa-lg text-light"></i></Link>
            <small className="text-light mt-1">{`${props.totalProductos} de Servicios, ${nombre}`}</small>
        </div>
    )
}

export default CartWidget
