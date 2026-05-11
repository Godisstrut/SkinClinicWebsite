function FillersCard({ amount, title, price, featured, featuredLabel, bullets }) {
  return (
    <div className={`fillers-card${featured ? ' fillers-card-featured' : ''}`}>
      <div className="fillers-card-header">
        <p className="fillers-card-area">{amount}</p>
        {featured && featuredLabel && (
          <span className="fillers-card-badge">{featuredLabel}</span>)}
      </div>
      <p className="fillers-card-title">{title}</p>
      <p className="fillers-card-price">{price}</p>
      <hr className="fillers-card-divider" />
      <ul className="fillers-card-bullets">
        {bullets.map((b, i) => (
          <li key={i} className="fillers-card-bullet-row">
            <span className="fillers-card-dot" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default FillersCard;