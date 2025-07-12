import React from "react";
import BrandCard from "../components/BrandCard";
import "./Trademarks.css";
import brands from "../components/BrandsData"

function Trademarks() {
    return(
        <div className="trademarks">
            <h2>Våra Varumärken:</h2>
            <div className="brands-layout">
                {brands.map((brand, id) => (
                    <BrandCard
                    key={id}
                    name={brand.name}
                    image={brand.image}
                    description={brand.description}
                />
                ))}
            </div>
        </div>
    )
}

export default Trademarks