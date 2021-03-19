import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return (
        <div className="container mt-5">
            <ul className="list-group">
                <li className="list-group-item">
                    Producto Uno
                    <ItemCount stock={5} initial={1}/>
                </li>
                <li className="list-group-item">
                    Producto Dos
                    <ItemCount stock={9} initial={1}/>
                </li>
                <li className="list-group-item">
                    Producto Tres
                    <ItemCount stock={7} initial={1}/>
                </li>
                <li className="list-group-item">
                    Producto Cuatro
                    <ItemCount stock={11} initial={1}/>
                </li>
                <li className="list-group-item">
                    Producto Cinco
                    <ItemCount stock={15} initial={1}/>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
