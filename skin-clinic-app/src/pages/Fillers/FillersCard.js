function FillersCard({title, price, summary, bullets, description}) {
    return(
        <div className="fillers-card" >
            <h2 className="title">{title}</h2>
            <p className="price">{price}</p>
            <p className="summary">{summary}</p>
            <ul className="bullet-points">
                {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ) )}
            </ul>
            <p>{description}</p>
        </div>
    )
}

export default FillersCard