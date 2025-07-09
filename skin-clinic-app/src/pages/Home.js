import React from "react";
import "./Home.css"
import ImageCarousel from "../components/ImageCarousel";

function Home() {
    return(
        <div className="home">
            <ImageCarousel />
            <p>Malmö skinclinic - Storgatan 39A, 211 42, Malmö Boka tid: +46729785925 eller på mail: malmoskinclinic@gmail.com </p>
            <h2>Din estetiska klinik i centrum av Malmö inom injektionsbehandligar som fillers och botox</h2>
            <h3>Om företaget</h3>
            <p>Efter mer än 10 år i branschen är Malmö skin clinic äntligen på boka direkt. Familjeföretaget som drivs av mor och son med erfarenheter som legitimerade sjuksköterskor, främst inom estetik!  </p>
        </div>
    )
}

export default Home