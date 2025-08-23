
function BotoxCard({ title, area, price, description, summary, bullets }) {
  return (
    <div className="botox-card">
      <h2 className="title">{title}</h2>
      <h4 className="area">{area}</h4>
      <p className="price">{price}</p>
      {summary && <p className="summary">{summary}</p>}

      {Array.isArray(bullets) && bullets.length > 0 && (
        <ul className="bullet-points">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BotoxCard;
