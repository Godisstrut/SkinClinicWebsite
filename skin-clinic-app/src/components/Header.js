import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/MalmoLogga.webp";
import "./Header.css"

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Bild på företagets logga"></img>
        <nav className="nav">
            <Link to="/">Startsida</Link>
            <Link to="/treatments">Behandlingar</Link>
            <Link to="/trademarks">Varumärken</Link>
            <Link to="/contact">Kontakt oss</Link>
        </nav>
        </div>
    )
}

export default Header