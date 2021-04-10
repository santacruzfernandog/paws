import React, {useEffect} from 'react'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import data from '../data.js'

const ItemListContainer = () => {

  const [items, setItems] = React.useState([])
  const { categoryId } = useParams();

  useEffect(()=>{
    const promFilter = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoryId) {
          const products = data.filter((producto) => {
            return producto.category.toString() === categoryId;
          });
          resolve(products);
        } else {
          resolve(data)
        }
      }, 2000);
    });
      
    promFilter.then((resultado) => {
        setItems(resultado);
    });
  }, [categoryId]);
      

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer
