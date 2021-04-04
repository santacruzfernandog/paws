import React, { useEffect } from 'react'
import Item from './Item'

const ItemList = ({items = [], tipo}) => {

    const [listado, setListado] = React.useState([])

    useEffect(()=>{
        const itemsFiltrados = items.filter(item => item.tipo === tipo)
        setListado(itemsFiltrados)
    },[items,tipo])

    return (
        <div>
            {listado.map(item => <Item item={item} key={item.id}/> )}
        </div>
    )
}

export default ItemList
