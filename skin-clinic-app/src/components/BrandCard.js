import React from "react";
import "./BrandCard.css";
import Card from 'react-bootstrap/Card';


function BrandCard({name, image, description}) {
    return(
    <Card className="brand-card" style={{ width: '60rem' }}>
      <Card.Img variant="top" src= {image} alt={`Bild på ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="#">Gå till produktsidan</Card.Link>
      </Card.Body>
    </Card>
    )
}

export default BrandCard