import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import SkinYouthCard from './SkinYouthCard';
import SkinYouthData from './SkinYouthData.json';
import './SkinYouth.css';

const BOOKING_URL = "https://www.bokadirekt.se/places/malmo-skin-clinic-57952"; 

function SkinYouth() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleDescription = (id) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section className="skin-youth">
        <div className="skin-youth-intro">
          <h1 className="skin-youth-intro-heading">Hudföryngring </h1>
          <p className="skin-youth-intro-text">
           Med ålder minskar hudens spänst, lyster och elasticitet. En anledning till åldrandet av huden är att produktionen av hyaluronsyra reduceras. Detta sker redan efter 25-årsåldern.
          </p>
          <div className="skin-youth-intro-badges">
            <span className="skin-youth-intro-badge">Molderm Glow / Molderm Glow + </span>
            <span className="skin-youth-intro-badge">Legitimerad sjuksköterska</span>
            <span className="skin-youth-intro-badge">Synligt resultat</span>
          </div>
        </div>
        <div className="skin-youth-grid">
          {SkinYouthData.map((data, id) => (
            <div
              key={id}
              className={`skin-youth-card-wrap${data.featured ? ' skin-youth-card-wrap-featured' : ''}`}
            >
              <SkinYouthCard
                treatments={data.treatments}
                title={data.title}
                price={data.price}
                duration={data.duration}
                featured={data.featured}
                featuredLabel={data.featuredLabel}
                bullets={data.bullets}
              />

              <div className="skin-youth-card-footer">
                <a href={BOOKING_URL} className="skin-youth-book-btn" target="_blank" rel="noopener noreferrer">
                  Boka tid
                </a>
                <button
                  className="skin-youth-toggle-btn"
                  onClick={() => toggleDescription(id)}
                  aria-controls={`skin-youth-description-${id}`}
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? 'Visa mindre ↑' : 'Läs mer ↓'}
                </button>
              </div>

              <Collapse in={openIndexes[id] || false}>
                <div id={`skin-youth-description-${id}`}>
                  <p className="skin-youth-description">{data.description}</p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
    </section>
  );
}

export default SkinYouth;