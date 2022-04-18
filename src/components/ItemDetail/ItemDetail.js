import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, nft, img, stock, descripcion }) => {
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
            </footer>
        </article>
    )
}

export default ItemDetail