import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ContactMap from "../components/ContactMap";
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
                    <Form action={`mailto:malmoskinclinic@gmail.com`} method="post" encType="text/plain">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="from" type="email" placeholder="namn@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>Ärende:</Form.Label>
                            <Form.Control name="message" as="textarea" rows={11} placeholder="Beskrivning" required/>
                        </Form.Group>
                        <Button type="submit" variant="primary">Skicka</Button>
                    </Form>
                </Col>
                <Col>
                    <h2 className="about">Kontakt & Öppettider</h2>
                        <div className="contact-section">
                            <p><i class="fa-solid fa-location-dot"></i> Adress: Storgatan 39A, 211 42 Malmö</p>
                            <p><i class="fa-solid fa-phone"></i> Telefon:+46 72 978 59 25</p>
                            <p><i class="fa-regular fa-envelope"></i> E-post: <a href="mailto:malmoskinclinic@gmail.com"> malmoskinclinic@gmail.com</a>
                            </p>
                            <p> <i class="fa-regular fa-calendar-days"></i> Boka tid: <a href="https://www.bokadirekt.se/places/malmo-skin-clinic-57952" target="_blank" rel="noreferrer" >BokaDirekt</a> </p>
                            <p> <i class="fa-brands fa-instagram"></i> Följ oss på instagram: <a href="https://www.instagram.com/malmoskinclinic/" target="_blank" rel="noreferrer" >malmoskinclinic</a>
                             </p>
                            <p><i class="fa-regular fa-clock"></i> Öppetider: Mån-Fre: 08:00-17:00 </p>
                            <p> Lördag-Söndag: stängt </p>
                        </div>
                    <div style={{ marginTop: 20 }} >
                        <ContactMap />
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Contact