import React, {useEffect} from 'react'
import ItemList from './ItemList';
import {getFirestore} from '../firebase'
import { useParams } from 'react-router';


const ItemListContainer = () => {

    const [items, setItems] = React.useState([])
    const { categoryId } = useParams()
    const [loader, setLoader] = React.useState(false)

    useEffect(() => {
      setLoader(true)
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
          setLoader(false)
        }
      })

    },[categoryId])
        

    return !loader ? (
        <div className="my-5">
          {
            categoryId  ? <div className="d-flex justify-content-center align-items-center">
                            <span className="text-center text-warning text-capitalize lobster-font h1 mr-2">Awesome Pets:</span>
                            <span className="text-secondary text-capitalize h1">{categoryId}</span>
                          </div>
                        : <div className="d-flex justify-content-center align-items-center">
                            <span className="text-center text-warning text-capitalize lobster-font h1 mr-2">Awesome Pets:</span>
                            <span className="text-secondary text-capitalize h1">Todos los Productos</span>
                          </div>
          }
          <ItemList items={items} key={items.id}/>
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

export default ItemListContainer
