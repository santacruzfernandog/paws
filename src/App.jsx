import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer'
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import adiestramientoImg from './img/adiestramiento.jpg'
import capacitacion from './img/capacitacion.jpg'
import obrasocial from './img/obrasocial.jpg'


function App() {

  const [items, setItems] = React.useState([])

  useEffect(()=>{
      const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve([
            { id: 1, nombre:'Adopciones', price:0, img:capacitacion, tipo:'refugio' },
            { id: 2, nombre:'Adiestramiento', price:8500, img:adiestramientoImg, tipo:'servicio' },
            { id: 3, nombre:'Peluqueria', price:500, img:adiestramientoImg, tipo:'servicio' },
            { id: 4, nombre:'Veterinario', price:600, img:obrasocial, tipo:'ooss' },
            { id: 5, nombre:'Vacunacion', price:1750, img:obrasocial, tipo:'ooss' },
            { id: 6, nombre:'Castracion', price:"A/C", img:obrasocial, tipo:'ooss' },
            { id: 7, nombre:'Guarderia', price:200, img:adiestramientoImg, tipo:'servicio' },
            { id: 8, nombre:'Capacitaciones', price:14000, img:adiestramientoImg, tipo:'servicio' },
            { id: 9, nombre:'Microchips', price:3000, img:obrasocial, tipo:'ooss' },
            { id: 10, nombre:'Paseos', price:3000, img:adiestramientoImg, tipo:'servicio' },
            { id: 11, nombre:'Higiene', price:3000, img:adiestramientoImg, tipo:'servicio' },
            { id: 12, nombre:'Cuidados esenciales', price:3000, img:capacitacion, tipo:'refugio' },
            { id: 13, nombre:'Tratamientos de Obesidad', price:3000, img:obrasocial, tipo:'ooss' },
            { id: 14, nombre:'Radiologia', price:3000, img:obrasocial, tipo:'ooss' },
            { id: 15, nombre:'Internacion', price:3000, img:obrasocial, tipo:'ooss' },
            { id: 16, nombre:'Control', price:3000, img:obrasocial, tipo:'ooss' }
          ])
        },2000)
      })
  
      prom.then((resultado)=>{
        setItems(resultado)
      })
  },[])

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact >
          <ItemListContainer
            titulo={'Awesome Pets'}
            subtitulo={'El cuidado de nuestras mascotas es todo'}>
            <MainPage/>
          </ItemListContainer>
        </Route>
        
        <Route path="/wellness" exact>
          <ItemListContainer
            titulo={'Wellness'}
            subtitulo={'La obra social para tu mascota'}>
            <ItemList items={items} tipo={'ooss'}/>
          </ItemListContainer>
        </Route>
        
        <Route path="/refugio" exact>
          <ItemListContainer
            titulo={'Refugio Aw.Pets'}
            subtitulo={'Cada mascota necesita encontrar una familia'}>
            <ItemList items={items} tipo={'refugio'}/>
          </ItemListContainer>
        </Route>
        
        <Route path="/servicios" exact>
          <ItemListContainer
            titulo={'Nuestros Servicios'}
            subtitulo={'Sabemos lo mucho que amas a tu mascota, nosotros te ayudamos a cuidarlo'}>
            <ItemList items={items} tipo={'servicio'}/>
          </ItemListContainer>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
