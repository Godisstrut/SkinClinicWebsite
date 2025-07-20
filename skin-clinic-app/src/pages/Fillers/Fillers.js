import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import FillersCard from "./FillersCard";
import FillersData from "./FillersData.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Fillers.css";

function Fillers() {
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleDescription = (id) => {
        setOpenIndexes((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };
    return(
        <div className="fillers" >
        <Container>
            <Row>
                <Col>
                <h1>Fillers</h1>
                {FillersData.map((data, id) => (<>
                    <FillersCard 
                    key= {id}
                    title = {data.title}
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

export default Fillers