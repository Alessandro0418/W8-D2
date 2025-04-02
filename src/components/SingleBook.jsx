import React from "react";
import { Card, Button } from "react-bootstrap";

function SingleBook({ libro }) {
  return (
    <Card>
      <Card.Img variant="top" src={libro.img} />
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text>{libro.category}</Card.Text>
        <Card.Text>{libro.price}€</Card.Text>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
