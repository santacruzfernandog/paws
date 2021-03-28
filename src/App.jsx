import React from 'react'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer nombre='AmongPaws'/>
      <Footer/>
    </div>
  );
}

export default App;
