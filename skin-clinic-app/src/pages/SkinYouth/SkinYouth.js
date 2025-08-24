import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/esm/Collapse';
import SkinYouthCard from './SkinYouthCard';
import SkinYouthData from "./SkinYouthData.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SkinYouth.css";

function SkinYouth() {
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
    return(
        <div className="skin-youth" >
        <Container>
            <Row>
                <Col>
                {SkinYouthData.map((data, id) => (<>
                    <SkinYouthCard 
                    key= {id}
                    title = {data.title}
                    treatments = {data.treatments}
                    price = {data.price}
                    summary = {data.summary}
                    bullets = {data.bullets}
                    />
                    <Button
                  onClick={() => toggleDescription(id)}
                  aria-controls= "example-fade-text"
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? "Visa mindre" : "Läs mer"}
                </Button>
                <Collapse in={openIndexes[id]}>
                  <div>
                    <div id="example-fade-text">
                    <p>{data.description}</p>
                    </div>
                  </div>
                </Collapse>
                </>))}
                <>
                </>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default SkinYouth