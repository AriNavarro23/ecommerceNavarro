import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({products}) => {

    return(
        <ul className='listProducts' onClick={() => console.log('Hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList