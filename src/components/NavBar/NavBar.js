import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
            <nav className="NavBar">
                <div className="logo">
                    <img src={'./images/logo192.png'}/>
                </div>
                <div className="navItem">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/shop.html">Shop</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
                <button className="button">
                    Login
                </button>
            </nav>
    )
}

export default NavBar