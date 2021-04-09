import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import data from '../data'

const ItemDetailContainer = () => {

    const [myItem, setMyItem] = React.useState([])
    const { itemId } = useParams()

    const getItems = (itemId)=> {
        const info = data[itemId-1]

        const promise = new Promise((resolve, reject)=> {
            resolve(
                { id:info.id, title:info.nombre, price:info.price, picture:info.img, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:Math.floor(Math.random() * 10) + 100 }
            )
        })

        return promise
    }

    useEffect(()=> {
        getItems(itemId).then(response => setMyItem(response))
        return
    },[itemId])

    return (
        <div>
            <ItemDetail item={myItem}/>
        </div>
    )
}

export default ItemDetailContainer
