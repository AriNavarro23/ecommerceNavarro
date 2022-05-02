import { useState, useEffect } from 'react'
// import { getProducts } from '../../mock'
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { FirestoreDb } from '../../Service/Firebase'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    
    const { categoryId } = useParams()

    // hook para traerme los productos del mock, ahora utilizo servicio de firebase
    useEffect(() => {
        // getProducts(categoryId).then(prods => {
        //     setProducts(prods)
        // }).catch(error => {
        //     console.log(error)
        // })

        //  si tengo categoria id, me ejecuta query que filtra, sino busca directo a la coleccion
        // tiene 3 paramtros, 1ero misma referencia (nombre de campo), 2do como lo voy a comparar(que sea =), y 3ro contra que lo comparo(recibo de params)
        const collectionRef = categoryId 
        ? query(collection(FirestoreDb, 'products'), where('categories', '==', categoryId), where('price', '==', 800))
        : query(collection(FirestoreDb, 'products'), orderBy("name", "desc"), limit(3))
        
        // const collectionRef = categoryId 
        //     ? query(collection(FirestoreDb, 'products'), where( 'category', '==', categoryId))
        //     : collection(FirestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            console.log(response);
            const products = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        // sirve para que se haga el montaje y termine, asi no hay un loop infinito
    }, [ categoryId ])

    if (products.length === 0) {
        return <h1>No hay productos</h1>
    }


    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer