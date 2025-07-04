import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/MalmoLogga.webp";
import "./Header.css"

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Bild på företagets logga"></img>
            <Link to="/">Startsida</Link>
            <Link to="/treatments">Behandlingar</Link>
            <Link to="/trademarks">Varumärken</Link>
            <Link to="/contact">Kontakt oss</Link>
        </div>
    )
}

export default Header