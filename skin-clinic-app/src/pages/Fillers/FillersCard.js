function FillersCard({title, price, description}) {
    return(
        <div className="fillers-card" >
            <h2 className="title" > {title} </h2>
            <p className="price" > {price} </p>
            <p> {description} </p>
        </div>
    )
}

export default FillersCard