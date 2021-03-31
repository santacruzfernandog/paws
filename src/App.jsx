import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact >
          <ItemListContainer nombre='Awesome Pets'/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
