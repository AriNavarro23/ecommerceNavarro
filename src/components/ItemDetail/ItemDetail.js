import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Count from '../Count/Count';
import CartContext from '../../context/CartContext';


const ItemDetail = ({ id, nombre, img, nft, descripcion, precio, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const productObj = {
            id, nombre, precio, quantity: count
        }

        addItem(productObj)
    }


return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {nft}
            </p>
            <p className="Info">
                Descripción: {descripcion}
            </p>
            <p className="Info">
                Precio: $ {precio}
            </p>
        </section>           
        <footer className='ItemFooter'>
            { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Count onAdd={handleAdd} stock={stock}/> } 
        </footer>
    </article>
)
}

export default ItemDetail