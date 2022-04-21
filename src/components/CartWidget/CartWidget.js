import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidget = () => {
    
    const { getQuantity } = useContext ( CartContext )

    return (
        <div className='CartWidget'>
            <img src="" alt='cart' style={{width:20}}/>
            { getQuantity () }
        </div>
    )
}

export default CartWidget