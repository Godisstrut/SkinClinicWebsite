import { useState, Fragment, useCallback, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'; // byt till standardimport
import FillersCard from './FillersCard';
import FillersData from './FillersData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Fillers.css';

function Fillers() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleDescription = useCallback((id) => {
    setOpenIndexes(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);
  
  const paragraphsById = useMemo(() => {
    const map = new Map();
    FillersData.forEach((d, i) => {
      const paras = String(d.description || '')
        .split(/\r?\n\s*\r?\n/)
        .filter(Boolean)
        .map((p, idx) => <p key={idx} className="prose">{p.trim()}</p>);
      map.set(i, paras);
    });
    return map;
  }, []);

  return (
    <div className="fillers">
      <Container>
        <Row>
          <Col>
            <h1>Fillers</h1>

            {FillersData.map((data, id) => {
              const isOpen = !!openIndexes[id];
              const panelId = `example-fade-text-${id}`;

              return (
                <Fragment key={id}>
                  <FillersCard
                    title={data.title}
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
                        {paragraphsById.get(id)}
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

export default Fillers;
