function BotoxCard({ area, title, price, duration, featured, featuredLabel, bullets }) {
  return (
    <div className={`botox-card${featured ? ' botox-card-featured' : ''}`}>
      <div className="botox-card-header">
        <p className="botox-card-area">{area}</p>
        {featured && featuredLabel && (
          <span className="botox-card-badge">{featuredLabel}</span>
        )}
      </div>
      <p className="botox-card-title">{title}</p>
      <p className="botox-card-price">
        {price}
        <span className="botox-card-duration"> · {duration}</span>
      </p>
      <hr className="botox-card-divider" />
      <ul className="botox-card-bullets">
        {bullets.map((b, i) => (
          <li key={i} className="botox-card-bullet-row">
            <span className="botox-card-dot" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BotoxCard;