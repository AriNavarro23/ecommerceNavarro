import './App.css';
import { CartContextProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from '../src/components/Form/Form';


const App = () => {
  

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/Form' element={<Form />} />
              </Routes>
        </BrowserRouter>
      </CartContextProvider>


    </div>
  );
}

export default App;
