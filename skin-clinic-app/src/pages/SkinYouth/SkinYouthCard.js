function SkinYouthCard({ treatments, title, price, duration, featured, featuredLabel, bullets }) {
  return (
    <div className={`skin-youth-card${featured ? ' skin-youth-card-featured' : ''}`}>

      <div className="skin-youth-card-header">
        <p className="skin-youth-card-area">{treatments}</p>
        {featured && featuredLabel && (
          <span className="skin-youth-card-badge">{featuredLabel}</span>
        )}
      </div>

      <p className="skin-youth-card-title">{title}</p>

      <p className="skin-youth-card-price">
        {price}
        <span className="skin-youth-card-duration"> · {duration}</span>
      </p>

      <hr className="skin-youth-card-divider" />

      <ul className="skin-youth-card-bullets">
        {bullets.map((b, i) => (
          <li key={i} className="skin-youth-card-bullet-row">
            <span className="skin-youth-card-dot" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SkinYouthCard;