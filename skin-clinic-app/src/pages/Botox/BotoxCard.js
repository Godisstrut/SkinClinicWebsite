/* */
function BotoxCard({ title, area, price, summary, bullets }) {
  return (
    <div className="botox-card">
      <h2 className="title">{title}</h2>
      <h4 className="area">{area}</h4>
      <p className="price">{price}</p>
      <p className="summary">{summary}</p>
      <ul className="bullet-points">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default BotoxCard;
