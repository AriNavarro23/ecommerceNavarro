import React, { useState} from "react";

const Count = (onAdd) => {

    const [count, setCount] = useState (0)
    const stock = 10;
    const initial = 0;

    return (
        <div>
            <button onClick={ () => { if (count< stock) {setCount(count + 1) } } }>+</button>
            <p>{count}</p>
            <button onClick={ () => { if (count > initial) {setCount(count - 1) } } }>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>

        </div>
    )
}

export default Count