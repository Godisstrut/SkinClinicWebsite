import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/esm/Collapse';
import FillersCard from './FillersCard';
import FillersData from './FillersData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Fillers.css';

function Fillers() {
  /* State variables for tracking which descriptions are open
  used so that not all description opens at once */
  const [openIndexes, setOpenIndexes] = useState({});

  // Function for toggling visibility 
  const toggleDescription = (id) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="fillers">
      <Container>
        <Row>
          <Col>
            {FillersData.map((data, id) => (
              <div key={id}>
                <FillersCard
                  title={data.title}
                  price={data.price}
                  summary={data.summary}
                  bullets={data.bullets}
                />
                <Button
                  onClick={() => toggleDescription(id)}
                  aria-controls={`filler-description-${id}`}
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? 'Visa mindre' : 'Läs mer'}
                </Button>
                <Collapse in={openIndexes[id]}>
                  <div>
                    <div id="example-fade-text">
                    <p>{data.description}</p>
                    </div>
                  </div>
                </Collapse>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fillers;