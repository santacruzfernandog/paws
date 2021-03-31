import React, {useEffect} from 'react'
import ItemList from './ItemList'
import adoptImg from '../img/adopt.jpg'
import adiestramientoImg from '../img/adiestramiento.jpg'
import veterinaria from '../img/veterinaria.jpg'
import capacitacion from '../img/capacitacion.jpg'
import guarderia from '../img/guarderia.jpg'
import obrasocial from '../img/obrasocial.jpg'
import vacunacion from '../img/vacunacion.jpg'
import peluqueria from '../img/peluqueria.jpg'
import castracion from '../img/castracion.jpg'


const ItemListContainer = (props) => {

    const [items, setItems] = React.useState([])

    useEffect(()=>{
        const prom = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve([
              { id: 1, nombre: 'Adopciones', price:0, img:adoptImg },
              { id: 2, nombre: 'Adiestramiento', price:8500, img:adiestramientoImg },
              { id: 3, nombre: 'Peluqueria', price:500, img:peluqueria },
              { id: 4, nombre: 'Veterinario', price:600, img:veterinaria },
              { id: 5, nombre: 'Vacunacion', price:1750, img:vacunacion },
              { id: 6, nombre: 'Castracion', price:"A/C", img:castracion },
              { id: 7, nombre: 'Guarderia', price:200, img:guarderia },
              { id: 8, nombre: 'Capacitaciones', price:14000, img:capacitacion },
              { id: 9, nombre: 'Obra Social', price:3000, img:obrasocial }
            ])
          },2000)
        })
    
        prom.then((resultado)=>{
          setItems(resultado)
        })
    },[])
    return (
        <div className="container mt-5">
          <div className="mb-5">
            <h1 id="my-brand" className="text-center text-warning mb-4 brand-title">{props.nombre}</h1>
            <p className="h3">Sabemos lo mucho que amas a tu mascota, por eso nosotros te ayudamos a cuidarlo.</p>
          </div>
          
          <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
