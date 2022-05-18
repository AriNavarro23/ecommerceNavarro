import './Cart.css'
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from "firebase/firestore";
import { firestoreDb } from "../../Service/Firebase";
import Checkout from '../CheckoutForm/Checkout';


const Cart = () => {
    const [ loading,setLoading ] = useState(false)
    const { cart, clearCart, getTotal, getQuantity } = useContext ( CartContext )

    const createOrder = () => {
        setLoading (true)

        // Orden de compra
        const objOrder = {
            items: cart,
            buyer: {
                name: 'Ariel Navarro' ,
                phone: '1136865691',
                mail: 'navarro.ariel@gmail.com',
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []
        
        // traeme todos los docs de esta colccion, donde los id de los docs esten dentro del array que paso
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        // accedo a los docs que me traigo de docs
            .then(response => {
                response.docs.forEach(doc => {
                    // datos obtenidos de la base de datos
                    const dataDoc = doc.data()
                    // busco con el find, aquel prod en el cart, donde el id sea = a este doc y de eso la cant
                    const prodQuantity = cart.find( prod => prod.id === doc.id)?.quantity
                    // si en la base de datos, el stock de este prod es >= a lo que agrego el user, lo actualizo
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    }
                    else{
                        outOfStock.push( {id:doc.id, ...dataDoc })
                    }
                })
            // si esta todo bien con los stock
            }).then(() =>{
                if (outOfStock.length === 0){
                    const collectionRef = collection(firestoreDb, 'orders' )
                    addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject( {name:' outOfStock', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading){
        return(<h1>Se esta generando orden</h1>)
    }

    if(getQuantity() === 0){
        return(<h1>No hay productos en el carrito</h1>)
    }

    return(
        <div className="Cart">
            <h1>Cart</h1>
            { cart.map( p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: $ {getTotal()}</h3>
            <button onClick={() => clearCart()} className = "Button">Limpiar carrito</button>
            <button onClick={() => createOrder()} className = "Button">Generar Orden</button>
        </div>    
    )
}

export default Cart
