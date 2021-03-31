import React, {useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({item}) => {

    const [myItem, setMyItem] = React.useState([])

    const getItems = ()=> {
        const promise = new Promise((resolve, reject)=> {
            resolve(
                { id:item.id, title:item.nombre, price:item.price, picture:item.img, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:Math.floor(Math.random() * 10) + 100 }
            )

            /* setTimeout(()=>{
                resolve(
                    { id:item.id, title:item.nombre, price:1520, picture:item.img, descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!', random:Math.floor(Math.random() * 10) + 100 }
                )
            },2000) */
        })

        return promise
    }

    useEffect(()=> {
        getItems().then(response => setMyItem(response))
        return
    },[])

    return (
        <div>
            <ItemDetail item={myItem}/>
        </div>
    )
}

export default ItemDetailContainer
