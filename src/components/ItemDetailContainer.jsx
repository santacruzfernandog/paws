import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFirestore} from '../firebase'

const ItemDetailContainer = () => {

    const [myItem, setMyItem] = React.useState([])
    const { itemId } = useParams()
    const [loader, setLoader] = React.useState(false)

    const getItems = (itemId)=> {
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const oneItem = itemsCollection.doc(itemId)

        return oneItem.get()
    }

    useEffect(()=> {
        setLoader(true)
        getItems(itemId).then(response => {
            if(response.exists){
                setMyItem(response.data())
            }
            setLoader(false)
        })
        return
    },[itemId])

    return !loader ? (
        <div className="container mb-5">
            <ItemDetail item={{id: itemId, ...myItem}}/>
        </div>
    ) : (
        <div className="text-center my-5">
          <div class="spinner-grow text-warning spinner-size" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h1 className="text-secondary">Cargando...</h1>
        </div>
      )
}

export default ItemDetailContainer
