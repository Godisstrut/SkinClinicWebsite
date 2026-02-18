import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../img/skinclinic_logga2.png";
import "./Header.css"
import Dropdown from "./Dropdown"

function Header() {

    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <img src={logo} alt="Bild på företagets logga"></img>
            <div className="links">
                <Link to="/">Startsida</Link>
                <div className="header-link"><Dropdown /></div> 
                <Link to="/trademarks">Varumärken</Link>
                <Link to="/contact">Kontakta oss</Link>
            </div>
        </div>
    )
}

export default Header