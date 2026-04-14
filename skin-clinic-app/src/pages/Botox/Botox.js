import { useState } from 'react';
import Button from "../../components/Button";
import Collapse from 'react-bootstrap/esm/Collapse';
import BotoxCard from './BotoxCard';
import BotoxData from './BotoxData.json';
import './Botox.css';

function Botox() {
  /* State variables for tracking which descriptions are open
  used so that not all description opens at once */
  const [openIndexes, setOpenIndexes] = useState({});
  const BOOKING_URL = 'https://www.bokadirekt.se/';

  // Function for toggling visibility 
  const toggleDescription = (id) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="botox">
      <div className="botox-grid">
            {BotoxData.map((data, id) => (
              <div key={id}>
                <BotoxCard
                  title={data.title}
                  area={data.area}
                  price={data.price}
                  summary={data.summary}
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
                <div id={`example-fade-text-${id}`}>
                  <p className="example-fade-text">{data.description}</p>
                </div>
              </Collapse>
            </div>
            ))}
      </div>
    </div>
  );
}

export default Botox;