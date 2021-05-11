import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const AlertOrder = ({idCompra}) => {

    const { clear } = useContext(CartContext)


    return (
        <div className="col-md-6 mx-auto alert alert-success alert-dismissible fade show my-5 text-center" role="alert">
            <h4 className="alert-heading">Woohoo!</h4>
            <p>Tu orden de compra fue generada correctamente!</p>
            <hr/>
            <p className="mb-0 lead">ID de Orden: <strong>{idCompra}</strong></p>
            <Link to="/" onClick={clear}>
                Volver al Inicio
            </Link>

            <Link to="/" onClick={clear} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </Link>
        </div>
    )
}

export default AlertOrder
