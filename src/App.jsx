import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'

import { MyContext } from './context/MyContext'

function App() {

  return (
    <BrowserRouter>
      <MyContext.Provider value='Fernando'>
          <NavBar/>
          <Switch>
            <Route path="/category/:categoryId" exact >
              <ItemListContainer/>
            </Route>
            
            <Route path="/item/:itemId" exact >
              <ItemDetailContainer/>
            </Route>
          </Switch>
          <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
