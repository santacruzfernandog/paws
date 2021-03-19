import React from 'react'

const CartWidget = (props) => {

    return (
        <div className="d-flex flex-column">
            <a className="mx-auto" href="#"><i className="fas fa-shopping-cart fa-lg text-light"></i></a>
            <small className="text-light mt-1">{`${props.onAdd} Productos`}</small>
        </div>
    )
}

export default CartWidget
