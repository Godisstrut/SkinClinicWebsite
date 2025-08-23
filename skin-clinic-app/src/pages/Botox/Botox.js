import { useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import BotoxData from './BotoxData.json';
import BotoxCard from './BotoxCard';
import './Botox.css';

function Botox() {
  const [openIndexes, setOpenIndexes] = useState({});

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
            <h1>Botox behandlingar</h1>
            {BotoxData.map((data, id) => {
              const isOpen = !!openIndexes[id];
              const panelId = `example-fade-text-${id}`;
              return (
                <Fragment key={id}>
                  <BotoxCard
                    title={data.title}
                    area={data.area}
                    price={data.price}
                    summary={data.summary}
                    bullets={data.bullets}
                  />
                  <Button
                    onClick={() => toggleDescription(id)}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Visa mindre' : 'Läs mer'}
                  </Button>
                  <Collapse in={isOpen} mountOnEnter unmountOnExit>
                    <div
                      id={panelId}
                      className="collapse-outer"
                      role="region"
                      aria-labelledby={`${panelId}-label`}
                    >
                      <div className="example-fade-text">
                        <h3 id={`${panelId}-label`} className="sr-only">
                          {data.title} – beskrivning
                        </h3>
                        {String(data.description || '')
                          .split(/\r?\n\s*\r?\n/)
                          .filter(Boolean)
                          .map((p, i) => (
                            <p key={i} className="prose">
                              {p.trim()}
                            </p>
                          ))}
                      </div>
                    </div>
                  </Collapse>
                </Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Botox;
