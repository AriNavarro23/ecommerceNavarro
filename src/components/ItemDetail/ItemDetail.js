import { useState } from 'react'
import { useNavigate, link } from 'react-router-dom';
import './ItemDetail.css'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [ count, setCount ] = useState ( initial )
    console.log(stock);
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }
    
    return (
        <div>
            <input type = 'number' onChange={handleChange} value = {count} />
            <button onClick={ () => onConfirm( count )}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount= ({ onConfirm, stock, initial = 0 })  => {
    const [ count, setCount ] = useState( initial )

    const increment = () => {
        setCount ( count +1)
    }

    const decrement = () => {
        setCount ( count -1 )
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => onConfirm( count )}>Agregar al carrito</button>
        </div>

    )
}


const ItemDetail = ({id, nombre, precio, nft, img, stock, descripcion }) => {

    const [ typeInput, setTypeInput ] = useState (true);
    const [ quantity, setQuantity ] = useState (0);
    const options = [{id: 0, value: '', text:'-'}, {id:1, value: '/', text: ' ItemListContainer'}, {id:2, }];
    const navigate = useNavigate ()

    const handleAdd = (count) => {
        console.log(' Agregar al carrito')
        setQuantity(count)
    }

    const handleSelect = ( value ) => {
        navigate(value)
    }

    const Count = typeInput ? ButtonCount : InputCount 


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
                    descripcion: {descripcion}
                </p>
                <p className="Info">
                    Precio: {precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <select options={ onselect={handleSelect} />
                {quantity > 0 ? <link to='/cart'> Ir al carrito </link : <Count onConfirm={handleAdd} stock={stock} />} 
                }
            </footer>
        </article>
    )
}

export default ItemDetail