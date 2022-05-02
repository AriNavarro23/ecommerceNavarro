import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
    const { cart, removeItem } = useContext ( CartContext )

    if( cart.lenght === 0){
        return(
            <h1>No se encontraron productos.</h1>
        )
    }

    return(
        <>
        <div className="Cart">
            <h1>Cart</h1>
            <ul>
                {
                    cart.map(prod => <li key={prod.id}>
                        {prod.img} <br/> Cantidad: {prod.quantity} <br/> Precio Unidad: {prod.price} <br/> SubTotal: {prod.quantity * prod.price} <button onClick={ () => removeItem(prod.id)}>X</button> </li>)
                }
            </ul>
        </div>    
        </>
    )
}

export default Cart