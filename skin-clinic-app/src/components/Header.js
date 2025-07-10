import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/skinclinic_logga.png";
import "./Header.css"
import Dropdown from "./Dropdown"

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Bild på företagets logga"></img>
            <div className="links">
                <Link to="/">Startsida</Link>
                <Dropdown />
                <Link to="/trademarks">Varumärken</Link>
                <Link to="/contact">Kontakt oss</Link>
            </div>
        </div>
    )
}

export default Header