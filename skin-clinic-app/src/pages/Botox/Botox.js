import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import BotoxCard from './BotoxCard';
import BotoxData from './BotoxData.json';
import './Botox.css';

const BOOKING_URL = 'https://www.bokadirekt.se/'; // 🔁 Replace with your BokaDirekt link

function Botox() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleDescription = (id) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="botox">
        <div className="botox-grid">
          {BotoxData.map((data, id) => (
            <div
              key={id}
              className={`botox-card-wrap${data.featured ? ' botox-card-wrap-featured' : ''}`}
            >
              <BotoxCard
                areaLabel={data.areaLabel}
                title={data.title}
                price={data.price}
                duration={data.duration}
                featured={data.featured}
                featuredLabel={data.featuredLabel}
                bullets={data.bullets}
              />

              <div className="botox-card-footer">
                <a href={BOOKING_URL} className="botox-book-btn">
                  Boka tid
                </a>
                <button
                  className="botox-toggle-btn"
                  onClick={() => toggleDescription(id)}
                  aria-controls={`botox-description-${id}`}
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? 'Visa mindre ↑' : 'Läs mer ↓'}
                </button>
              </div>

              <Collapse in={openIndexes[id] || false}>
                <div id={`botox-description-${id}`}>
                  <p className="botox-description">{data.description}</p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      
    </section>
  );
}

export default Botox;