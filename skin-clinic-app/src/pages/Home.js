import React from "react";
import "./Home.css";
import ImageCarousel from "../components/ImageCarousel";

function Home() {
  return (
    <div className="home">
      <ImageCarousel />
      <div className="home-wrapper" >
        <div className="home-content">
            <h2>Din estetiska klinik i centrala Malmö</h2>
            <p className="intro-text">
            Vi erbjuder injektionsbehandlingar som fillers och botox, med trygghet och kvalitet i fokus.
            </p>
            <h3>Om oss</h3>
            <p>
            Efter mer än 10 år i branschen är Malmö Skinclinic äntligen tillgängligt på BokaDirekt.
            Familjeföretaget drivs av mor och son - legitimerade sjuksköterskor med stor erfarenhet inom estetiska behandlingar.
            </p>
            <p>
            Hos oss får du alltid gratis konsultation i samband med besöket. Alla nya kunder behöver boka en konsultation minst 48 timmar innan behandling.
            </p>
            <div className="contact-info">
              <p><i class="fa-solid fa-location-dot"></i> Storgatan 39A, 211 42 Malmö </p>
              <p> <i class="fa-regular fa-calendar-days"></i> Boka tid: <a href="https://www.bokadirekt.se/places/malmo-skin-clinic-57952" target="_blank" rel="noreferrer" >BokaDirekt</a> </p>
              <p><i class="fa-solid fa-phone"></i> Telefon:+46 72 978 59 25</p>
              <p> <i class="fa-regular fa-envelope"></i> E-post: <a href="mailto:malmoskinclinic@gmail.com">malmoskinclinic@gmail.com</a></p>
              <p> <i class="fa-brands fa-instagram"></i> Följ oss på instagram: <a href="https://www.instagram.com/malmoskinclinic/" target="_blank" rel="noreferrer" >malmoskinclinic</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
