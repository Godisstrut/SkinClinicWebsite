import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <Dropdown>
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
  );
}

export default DropdownMenu;
