function SkinYouthCard({title, treatments, price, summary, bullets, description }) {
    return(
        <div className="skin-youth-card" >
            <h2 className="title">{title}</h2>
            <h4 className="treatments">{treatments}</h4>
            <p className="price">{price}</p>
            <p className="summary">{summary}</p>
            <ul className="bullet-points" >
                {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
            <p>{description}</p>
        </div>
    )
}

export default SkinYouthCard