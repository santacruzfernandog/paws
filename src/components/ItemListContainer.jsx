import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return (
        <div className="container mt-5">
            <h4 className="text-center mb-5">Bienvenidos a {props.nombre}</h4>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
