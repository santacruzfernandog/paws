import React, {useEffect} from 'react'
import ItemDetail from './ItemDetail'
import products1 from '../img/products1.jpg'/* 
import cutecat1 from '../img/cutecat1.jpg'
import cutecat2 from '../img/cutecat2.jpg' */

const ItemDetailContainer = () => {

    const [item, setItem] = React.useState([])

    const getItems = ()=> {
        const promise = new Promise((resolve, reject)=> {
            setTimeout(()=>{
                resolve(
                    { id:1, title:"Alimento Balanceado", price:1520, pictureUrl:products1, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:Math.floor(Math.random() * 10) + 100 }
                )
            },2000)
        })

        return promise
    }

    useEffect(()=> {
        getItems().then(response => setItem(response))
        return
    },[])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
