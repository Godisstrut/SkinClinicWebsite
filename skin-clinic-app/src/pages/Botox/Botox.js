import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/esm/Collapse';
import BotoxCard from './BotoxCard';
import BotoxData from './BotoxData.json';
import './Botox.css';

function Botox() {
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
    <div className="botox">
      <Container>
        <Row>
          <Col>
            {BotoxData.map((data, id) => (
              <div key={id}>
                <BotoxCard
                  title={data.title}
                  area={data.area}
                  price={data.price}
                  summary={data.summary}
                  bullets={data.bullets}
                />
                <Button
                  onClick={() => toggleDescription(id)}
                  aria-controls={`botox-description-${id}`}
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

export default Botox;