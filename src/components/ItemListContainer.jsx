import React, {useEffect} from 'react'
import ItemList from './ItemList';
import {getFirestore} from '../firebase'
import { useParams } from 'react-router';


const ItemListContainer = () => {

    const [items, setItems] = React.useState([])
    const { categoryId } = useParams()

    useEffect(() => {
      const db = getFirestore()
      let itemsCollection;

      if(categoryId){
        itemsCollection = db.collection('items').where( 'category' ,'==' , categoryId ).get()
      } else {
        itemsCollection = db.collection('items').get()
      }

      itemsCollection.then((snapshot) => {
        if(snapshot.size > 0){
          setItems(snapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
          }))
        }
      })

    },[categoryId])
        

    return (
        <ItemList items={items} key={items.id}/>
    )
}

export default ItemListContainer
