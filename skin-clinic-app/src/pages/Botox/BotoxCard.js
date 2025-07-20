
function BotoxCard({title, area, price, description}) {
    return(
        <div className="botox-card">
            <h2 className="title"> {title} </h2>
            <h4> {area} </h4>
            <p className="price"> {price} </p>
            <p> {description} </p>
        </div>
        
    )
}

export default BotoxCard