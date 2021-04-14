import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'


const CartWidget = () => {

    const {cart} = useContext(CartContext)
    const [cantidadTotal, setCantidadTotal] = React.useState(0)
    
    useEffect(() => {
        let total = 0;
        cart.map(item => total += item.quantity)
        setCantidadTotal(total)
    }, [cart])


    return (
        <div className="d-flex flex-column">
            <Link to={''} className="mx-auto" href="#"><i className="fas fa-shopping-cart fa-lg text-light"></i></Link>
            <small className="text-light mt-1">{`${cantidadTotal} de Servicios`}</small>
        </div>
    )
}

export default CartWidget
