import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = (props) => {

    return (
        <div className="d-flex flex-column">
            <Link to={''} className="mx-auto" href="#"><i className="fas fa-shopping-cart fa-lg text-light"></i></Link>
            <small className="text-light mt-1">{`${props.totalProductos} Servicios`}</small>
        </div>
    )
}

export default CartWidget
