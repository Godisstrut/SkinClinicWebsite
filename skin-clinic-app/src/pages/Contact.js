import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.css"

function Contact() {
    return(
        <div className="contact">
        <Container>
            <Row>
                <Col>
                    <h2 className="about">Om företaget</h2>
                    <p className="about-text">Ibland är det svårt att veta vad man skall boka, hur många milliliter och vilka områden. Om du känner dig osäker får du gärna höra av dig via sms, messenger eller direktmeddelande på instagram så hjälper vi dig. </p>
                    <p className="about-text"> Dina behandlare är utbildade och sätter din säkerhet i fokus. På kliniken finns legitimation och certifikat. Kliniken har en erfaren läkare inom estetiska injektioner för samråd.</p>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="namn@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ärende:</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Button variant="primary">Skicka</Button>
                    </Form>
                </Col>
                <Col>
                    <h2 className="contact-section">Kontakt och öppetider</h2>
                    <p>Kliniken har öppet måndag till fredag 08:00-17:00. Helger är stängt</p>
                    <p>Telefon: +46729785925</p>
                    <p>Mail: malmoskinclinic@gmail.com</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Contact