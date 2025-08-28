import React from "react";
import "./BrandCard.css";
import Card from 'react-bootstrap/Card';


function BrandCard({name, image, description, url}) {
    return(
    <Card className="brand-card">
      <Card.Img variant="top" src= {image} alt={`Bild på ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={url} target="_blank">Gå till produktsidan</Card.Link>
      </Card.Body>
    </Card>
    )
}

export default BrandCard