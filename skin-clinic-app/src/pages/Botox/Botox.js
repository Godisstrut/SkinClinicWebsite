import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import BotoxData from "./BotoxData.json";
import BotoxCard from './BotoxCard';
import "./Botox.css";

function Botox() {
    const [openIndexes, setOpenIndexes] = useState({});
    //Used for toggling between opening and closing the description for each individual treatment
    const toggleDescription = (id) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    return(
        <div className="botox">
        <Container>
            <Row>
                <Col >
                <h1>Botox behandlingar</h1>
                {BotoxData.map((data, id) => (<>
                    <BotoxCard 
                    key= {id}
                    title = {data.title}
                    area = {data.area}
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

export default Botox