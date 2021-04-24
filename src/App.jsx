import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'

import { CartProvider } from './context/CartContext'
import Cart from './components/Cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact >
            <ItemListContainer/>
          </Route>

          <Route path="/category/:categoryId" exact >
            <ItemListContainer/>
          </Route>
          
          <Route path="/item/:itemId" exact >
            <ItemDetailContainer/>
          </Route>
          
          <Route path="/cart" exact >
            <h2>Estoy en el Cart</h2>
            <Cart></Cart>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
