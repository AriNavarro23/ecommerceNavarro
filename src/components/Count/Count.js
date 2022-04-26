import React, { useState} from "react";

// const Count = (onAdd) => {

//     const [count, setCount] = useState (0)

//     const stock = 10;
//     const initial = 0;

//     return (
//         <div>
//             <button onClick={ () => { if (count< stock) {setCount(count + 1) } } }>+</button>
//             <p>{count}</p>
//             <button onClick={ () => { if (count > initial) {setCount(count - 1) } } }>-</button>
//             <button onClick={() => onAdd(count)}>Agregar al carrito</button>

//         </div>
//     )
// }

// export default Count

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    if(stock === 0) {
        return <button className='Option' disabled>No hay stock</button>
    }

    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="Option" onClick={decrement}>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="Option" onClick={increment}>+</button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="Option" onClick={() => onAdd(quantity)}>Agregar al carrito</button></td>
                    </tr>
                </tbody>
            </table>       
        </div>
    )

}

export default ItemCount