import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'

import { CartProvider } from './context/CartContext'

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
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
