import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

function DropdownMenu() {

  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);

  // Cancels the hide timer
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); 
    setShow(true);
  };
  // Delays the hide timer
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShow(false), 100); 
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown show={show}>
        <Dropdown.Toggle as="span" className="header-link">
          Behandlingar
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/treatments/botox">
            Botox
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/treatments/fillers">
            Fillers
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/treatments/skinyouth">
            Hudföryngring
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;
