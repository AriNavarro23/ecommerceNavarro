import './NavBar.css'

const NavBar = () => {
    return(
            <nav>
                <div className="logo">
                    <img src={'./public/logo192.png'}/>
                </div>
                <div className="navBar">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/shop.html">Shop</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>
                <button className="button">
                    Login
                </button>
            </nav>
    )
}

export default NavBar