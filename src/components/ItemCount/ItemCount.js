import React, {useEffect, useState} from "react";

const ItemCount = () => {

    const [state, setState] = useState (0)
    const stock = 10;
    const initial = 0;
    return (
        <div>
            <button onClick={ () => { if (state < stock) {setState(state + 1) } } }>+</button>
            <p>{state}</p>
            <button onClick={ () => { if (state > initial) {setState(state - 1) } } }>-</button>
        </div>
    )
}

export default ItemCount