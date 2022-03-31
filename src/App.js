import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Hola Mundo' />
    </div>
  );
}

export default App;
