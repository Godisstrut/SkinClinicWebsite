import React from "react";
import "./Home.css"
import ImageCarousel from "../components/ImageCarousel";

function Home() {
    return(
        <div className="home">
            <h1>Startsida</h1>
            <ImageCarousel />
        </div>
    )
}

export default Home