import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFirestore} from '../firebase'

const ItemDetailContainer = () => {

    const [myItem, setMyItem] = React.useState([])
    const { itemId } = useParams()

    const getItems = (itemId)=> {
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const oneItem = itemsCollection.doc(itemId)

        return oneItem.get()
    }

    useEffect(()=> {
        getItems(itemId).then(response => {
            if(response.exists){
                setMyItem(response.data())
            }
        })
        return
    },[itemId])

    return (
        <div>
            <ItemDetail item={{id: itemId, ...myItem}}/>
        </div>
    )
}

export default ItemDetailContainer
