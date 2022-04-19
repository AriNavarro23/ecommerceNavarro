import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return(
            <nav className="NavBar">
                <div className='logo'>
                    <Link to='/'>
                        <h3 className='logoH3'>Ecommerce</h3>
                    </Link>
                </div>
                <div className='Categorias'>
                    <NavLink to='/list' className= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>List</NavLink>
                    <NavLink to='/detail' className= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Detail</NavLink>
                </div>

                <div>
                    <CartWidget/>
                </div>
            </nav>
    )
}

export default NavBar