import { useState, useEffect } from 'react'
import { getProductsById } from '../../mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ( {setCart, cart} ) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams( )

    // logica de traer el producto con el id y sino cactheo el error
    useEffect (() => {
        getProductsById(productId).then(item =>{
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return(() => {
            setProduct()
        })
    }, [ productId ])


    // devuelvo el container del detalle, pregunto, si esta cargando, y si esta el producto entonces traigo mediante spread
    // y uso el estado para traer el detalle del item si es verdadero y sino no existe
    return(
        <div className="ItemDetailContainer"> 
            {
                loading ?
                    <h1>Cargando...</h1> :
                product ?
                    <ItemDetail {...product} setCart= { setCart } cart={ cart } /> :
                    <h1>El producto no existe</h1>
            }   
        </div>
    )
}

export default ItemDetailContainer