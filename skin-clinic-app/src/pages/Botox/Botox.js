import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import BotoxCard from './BotoxCard';
import BotoxData from './BotoxData.json';
import './Botox.css';

const BOOKING_URL = "https://www.bokadirekt.se/places/malmo-skin-clinic-57952";

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
      <div className="botox-intro">
        <h1 className="botox-intro-heading" >Botox</h1>
        <p className="botox-intro-text">
          Botulinumtoxin (botox) är ett muskelavslappnande läkemedel som i estetisk syfte används för att förhindra uppkomsten av linjer och rynkor samt förbättra redan existerande linjer. 
        </p>
        <div className="botox-intro-badges">
            <span className="botox-intro-badge">legitimerad sjuksköterska</span>
            <span className="botox-intro-badge">Botox behandling i upp till 3 områden</span>
            <span className="botox-intro-badge">pannrynkor, argrynkor, ögonrynkor</span>
        </div>
      </div>
        <div className="botox-grid">
          {BotoxData.map((data, id) => (
            <div
              key={id}
              className={`botox-card-wrap${data.featured ? ' botox-card-wrap-featured' : ''}`}
            >
              <BotoxCard
                area={data.area}
                title={data.title}
                price={data.price}
                featured={data.featured}
                featuredLabel={data.featuredLabel}
                bullets={data.bullets}
              />

              <div className="botox-card-footer">
                <a href={BOOKING_URL} target="blank" className="botox-book-btn">
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