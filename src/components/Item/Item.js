import './Item.css'
import { Link } from "react-router-dom"


const Item = ({id, name, price, img}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en item');
    }

    return (

        <article className="CardItem" onClick={handleClick}>
            <header className="Head">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio:$ {price}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item