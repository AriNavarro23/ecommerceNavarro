import { useState, useEffect } from 'react'
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { FirestoreDb } from '../../Service/Firebase'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    // hook para traerme los productos del mock, ahora utilizo servicio de firebase
    useEffect(() => {
        setLoading(true)
        //  si tengo categoria id, me ejecuta query que filtra, sino busca directo a la coleccion
        // tiene 3 paramtros, 1ero misma referencia (nombre de campo), 2do como lo voy a comparar(que sea =), y 3ro contra que lo comparo(recibo de params)
        
        const collectionRef = categoryId 
            ? query(collection(FirestoreDb, 'products'), where('categories', '==', categoryId))
            : collection(FirestoreDb, 'products')

        getDocs(collectionRef)
            .then(response =>{
                const products = response.docs.map(doc => {
                    return{id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
            // sirve para que se haga el montaje y termine, asi no hay un loop infinito
            })
            .catch(error => {
                console.log(products);
            })
            .finally(() => {
                setLoading(false)
            })
            , [ categoryId ]

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer