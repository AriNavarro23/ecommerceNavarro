import { useState } from "react"

// const ItemCount = () => {

//     const [state, setState] = useState (0)

//     return (
//         <div>
//             <button onClick={ () => { setState(state - 1) } }>-</button>
//             <p>{state}</p>
//             <button onClick={ () => { setState(state + 1) } }>+</button>
//         </div>
//     )
// }

const ItemCount = () => {
    const [counter, setCounter] = useState (0);

    const sumar = (counter) => {
        if (counter > 0) {
            setCounter(counter +1)
        }
    }
    const restar = (counter) => {
        if (counter < 0) {
            setCounter(counter -1)
        }
    }
    const reset = () => setCounter(0);

    return(
        <div>
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button><br/>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount