import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <article className='Card'
    )
}



export default CartItem