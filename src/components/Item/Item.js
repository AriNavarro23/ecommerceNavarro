import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
    return (

        <article className="CardItem">
            <header className="Head">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio:$ {precio}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item