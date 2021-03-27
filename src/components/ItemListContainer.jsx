import React, {useEffect} from 'react'
import ItemList from './ItemList'
import products1 from '../img/products1.jpg'
import cutecat1 from '../img/cutecat1.jpg'
import cutecat2 from '../img/cutecat2.jpg'

const ItemListContainer = (props) => {

    const [items, setItems] = React.useState([])

    useEffect(()=>{
        const prom = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve([
              { id:1, title:"Alimento Balanceado", price:1520, pictureUrl:products1, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:156},
              { id:2, title:"Pasto Sintetico", price:5600, pictureUrl:cutecat1, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:245},
              { id:3, title:"Litera", price:2570, pictureUrl:cutecat2, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:317}
            ])
          },2000)
        })
    
        prom.then((resultado)=>{
          setItems(resultado)
        })
    })
    return (
        <div className="container mt-5">
            <h4 className="text-center mb-5">Bienvenidos a {props.nombre}</h4>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
