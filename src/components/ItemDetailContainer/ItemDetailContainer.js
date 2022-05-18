import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../Service/Firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ( {setCart, cart} ) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams( )

    // logica de traer el producto con el id y sino cactheo el error
    useEffect (() => {
        setLoading (true)

        const docRef = doc(firestoreDb, 'products', productId)

        // traigo el doc, que esta en mi base de datos, en coleccion produts, con el ID traemelo
        getDoc(docRef)
            .then(response => {
                // transformo lo que me da firestore a lo que a mi me sirve
                const product = { id: response.id, ...response.data()}
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return(
            <h1>Cargando...</h1> 
        )
    }

    // devuelvo el container del detalle, pregunto si esta cargando, y si esta el producto entonces traigo mediante spread
    // y uso el estado para traer el detalle del item si es verdadero y sino no existe
    return (
        <div className="ItemDetailContainer" >
            { 
                product 
                    ? <ItemDetail  {...product} setCart={setCart} cart={cart}/> 
                    : <h1>El producto no existe</h1> 
            }
        </div>
    )    
}

export default ItemDetailContainer

