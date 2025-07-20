function SkinYouthCard({title, treatments, price, description }) {
    return(
        <div className="skin-youth-card" >
            <h2 className="title" > {title} </h2>
            <h4> {treatments} </h4>
            <p> {price} </p>
            <p> {description} </p>
        </div>
    )
}

export default SkinYouthCard