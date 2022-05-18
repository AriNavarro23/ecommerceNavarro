import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { firestoreDb } from '../../Service/Firebase'
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import SearchIcon from '@mui/icons-material/Search';

// defino con funcion, uso un estado de categorias 
const NavBar = () => {
    const [categories, setCategories] = useState([])

    // funcion para la consulta de categorias 
    useEffect(() => {

        // traeme los docs de la colleccion de firestore en categories
        // traigo una const donde me traiga los docs con el id 
        getDocs(query(collection(firestoreDb, 'categories'), orderBy("order", "asc"))).then(response => {
            const categories = response.docs.map (doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])


    // devuelvo los componentes, y en categorias mapeo devolviendo nuevo array, linkeo a donde quiero que me lleve cada 
    // componente y muestro por id si esta activo el link o no y muestro nombre por descripcion
    return (
        <nav className="NavBar" >
            <div className='brand'>
                <Link to='/'>
                    <h3>A<span>N</span></h3>
                </Link>
            </div>
            <div className='searchContainer'>
                <input className='input' placeholder='Search items, collections and accounts' />
                <SearchIcon className="SearchIcon" style={{fontSize:18}}  />
            </div>
            <div className="Categories">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.description}</NavLink>)}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar