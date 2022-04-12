import React from 'react'
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Hola Mundo' />
        <ItemCount/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
