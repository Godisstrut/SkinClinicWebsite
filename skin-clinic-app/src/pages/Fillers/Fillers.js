import { useState } from 'react';
import Collapse from 'react-bootstrap/esm/Collapse';
import FillersCard from './FillersCard';
import FillersData from './FillersData.json';
import './Fillers.css';

function Fillers() {
  /* State variables for tracking which descriptions are open
  used so that not all description opens at once */
  const [openIndexes, setOpenIndexes] = useState({});
  const BOOKING_URL = "https://www.bokadirekt.se/places/malmo-skin-clinic-57952";
  // Function for toggling visibility 
  const toggleDescription = (id) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
   return (
    <section className="fillers">
      
        <div className="fillers-intro">
          <h1 className="fillers-intro-heading">Hyaluronsyra Filler</h1>
          <p className="fillers-intro-text">
            Hyaluronsyra är ett ämne som finns naturligt i huden och ger lyster, fukt och volym.
            Våra fillerbehandlingar är skonsamma och ger ett naturligt resultat oavsett om du
            vill förstora läpparna, fylla ut veck eller lyfta kinderna.
          </p>
          <div className="fillers-intro-badges">
            <span className="fillers-intro-badge">1 ml liten mängd </span>
            <span className="fillers-intro-badge">Legitimerad sjuksköterska</span>
            <span className="fillers-intro-badge">Håller 3–12 månader</span>
          </div>
        </div>
        <div className="fillers-grid">
          {FillersData.map((data, id) => (
            <div
              key={id}
              className={`fillers-card-wrap${data.featured ? ' fillers-card-wrap-featured' : ''}`}
            >
              <FillersCard
                amount={data.amount}
                title={data.title}
                price={data.price}
                featured={data.featured}
                featuredLabel={data.featuredLabel}
                bullets={data.bullets}
              />
 
              <div className="fillers-card-footer">
                <a href={BOOKING_URL} target="blank" className="fillers-book-btn">
                  Boka tid
                </a>
                <button
                  className="fillers-toggle-btn"
                  onClick={() => toggleDescription(id)}
                  aria-controls={`filler-description-${id}`}
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? 'Visa mindre ↑' : 'Läs mer ↓'}
                </button>
              </div>
 
              <Collapse in={openIndexes[id] || false}>
                <div id={`filler-description-${id}`}>
                  <p className="fillers-description">{data.description}</p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
 
      
    </section>
  );
}

export default Fillers;