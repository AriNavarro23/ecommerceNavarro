import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';


const App = () => {

  return (
    <div className="App">
        {/* <NavBar/>
        <ItemListContainer greeting='E-commerce' /> */}
        {/* <ItemDetailContainer/> */}
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>} />
                    <Route path='/list' element={<ItemListContainer />} />
                    <Route path='/detail' element={<ItemDetailContainer />} />
                </Routes>
        </BrowserRouter>
        {/* <ItemCount/> */}

    </div>
  );
}

export default App;
