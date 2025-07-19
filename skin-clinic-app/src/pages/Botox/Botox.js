import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import BotoxData from "./BotoxData.json";
import "./Botox.css";

function Botox() {
    const [open, setOpen] = useState(false);

    return(
        <div className="botox">
        <Container>
            <Row>
                <Col >
                <h1>Botox behandlingar</h1>
                {BotoxData.map((data) => (<>
                    <h2 className="title">{data.title}</h2>
                    <h3> {data.area}</h3>
                    <p> {data.price} </p>
                    <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}>Läs mer
                    </Button>
                    <Fade in={open}>
                    <div id="example-fade-text">
                        <p> {data.description} </p>
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