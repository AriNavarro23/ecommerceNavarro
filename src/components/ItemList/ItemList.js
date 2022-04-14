// import ''
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div ClassName='ListaGrupo'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList