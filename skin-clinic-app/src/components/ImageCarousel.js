import { useState, useEffect, useCallback } from 'react';
import './ImageCarousel.css';
import skinClinicRoom from "../img/skinclinic_sal.jpg";
import skinClinicStreet from "../img/skinclinic_gata.jpg";
import skinClinicOp from "../img/skinclinic_op.jpg";

const SLIDES = [
  {
    image: skinClinicStreet,
    alt: 'Bild utanför Malmö Skin Clinic',
  },
  {
    image: skinClinicOp,
    alt: 'Fillerbehandling på Malmö Skin Clinic',
  },
  {
    image: skinClinicRoom,
    alt: 'Bild på sal i Malmö Skin Clinic',
  },
];

const BOOKING_URL = 'https://www.bokadirekt.se/places/malmo-skin-clinic-57952';
const AUTO_ADVANCE_MS = 4000;

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
 
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);
 
  const prev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };
 
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [current, paused, next]);
 
  return (
    <div
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? 'hero-slide-active' : ''}`}
          aria-hidden={index !== current}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-image"
            style={{ objectPosition: "center center" }}
          />
          <div className="hero-overlay" />
        </div>
      ))}
 
      
      <div className="hero-content">
        <p className="hero-eyebrow">Din estetiska klinik i centrala Malmö</p>
        <h1 className="hero-heading">
          Timeless beauty <br />effortlessly refined
        </h1>
        <p className="hero-subtext">
          Vi erbjuder injektionsbehandlingar som fillers och botox,<br />
          med trygghet och kvalitet i fokus.
        </p>
        <div className="hero-cta-row">
          <a href={BOOKING_URL} className="hero-btn-primary">
            Boka tid
          </a>
          <a href="/trademarks" className="hero-btn-secondary">
            Våra varumärken
          </a>
        </div>
      </div>
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Föregående bild">‹</button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Nästa bild">›</button>
      <div className="hero-dots" role="tablist" aria-label="Bildväljare">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === current}
            aria-label={`Bild ${index + 1}`}
            className={`hero-dot ${index === current ? 'hero-dot-active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;