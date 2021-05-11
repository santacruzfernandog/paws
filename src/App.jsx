import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Information from './components/Information'
import Services from './components/Services'

import ItemDetailContainer from './components/ItemDetailContainer'

import { CartProvider } from './context/CartContext'
import Cart from './components/Cart';
import Galeria from './components/Galery';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact >
            <ItemListContainer/>
            <Services/>
            <Galeria/>
            <Information/>
          </Route>

          <Route path="/category/:categoryId" exact >
            <ItemListContainer/>
          </Route>
          
          <Route path="/item/:itemId" exact >
            <ItemDetailContainer/>
          </Route>
          
          <Route path="/cart" exact >
            <Cart/>
          </Route>
        </Switch>

        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
