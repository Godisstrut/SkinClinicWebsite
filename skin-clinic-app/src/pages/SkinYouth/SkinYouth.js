import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import SkinYouthCard from './SkinYouthCard';
import SkinYouthData from "./SkinYouthData.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SkinYouth.css";

function SkinYouth() {
    const [openIndexes, setOpenIndexes] = useState({});

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
                <h1>Hudföryngring</h1>
                {SkinYouthData.map((data, id) => (<>
                    <SkinYouthCard 
                    key= {id}
                    title = {data.title}
                    treatments={data.treatments}
                    price = {data.price}
                    />
                    <Button
                  onClick={() => toggleDescription(id)}
                  aria-controls= "example-fade-text"
                  aria-expanded={openIndexes[id] || false}
                >
                  {openIndexes[id] ? "Visa mindre" : "Läs mer"}
                </Button>
                <Fade in={openIndexes[id]}>
                  <div id="example-fade-text">
                    <p>{data.description}</p>
                  </div>
                </Fade>
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