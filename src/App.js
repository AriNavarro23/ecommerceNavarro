import React from 'react'
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

const App = () => {

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Hola Mundo' />
        <ItemCount/>
    </div>
  );
}

export default App;
