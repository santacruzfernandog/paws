import React, {useEffect} from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

    const [items, setItems] = React.useState([])

    useEffect(()=>{
        const prom = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve([
              { id: 1, nombre: 'Item 1', precio: 1530 },
              { id: 2, nombre: 'Item 2', precio: 2547 },
              { id: 3, nombre: 'Item 3', precio: 3652 }
            ])
          },2000)
        })
    
        prom.then((resultado)=>{
          setItems(resultado)
        })
    },[])
    return (
        <div className="container mt-5">
            <h4 className="text-center mb-5">Bienvenidos a {props.nombre}</h4>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
