import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
    return (

        <section className='section'>
            <picture>
                <img className='img' src={img} alt={nombre}/>
            </picture>
            <h3>{nombre}</h3>
            <h3>{precio}</h3>
        </section>

        // <article className="CardItem">
        //     <header className="Header">
        //         <h2 className="ItemHeader">
        //             {nombre}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={nombre} className="ItemImg"/>
        //     </picture>
        //     <section>
        //         <p className="Info">
        //             Precio:$ {precio}
        //         </p>
        //     </section>
        //     <footer className="ItemFooter">
        //         <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
        //     </footer>
        // </article>
    )
}

export default Item