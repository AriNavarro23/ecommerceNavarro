const Item = ({name,img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>Ape Bored Yatch</h3>
        </section>
    )
}

export default Item