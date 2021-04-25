import React from 'react'
import Item from './Item'

const ItemList = ({items = []}) => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center mt-5">
                {items.map(item => <Item item={item} key={item.id}/> )}
            </div>
        </div>

    )
}

export default ItemList
