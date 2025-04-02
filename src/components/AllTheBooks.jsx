import books from "../data/history.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AllTheBooks = function () {
  return (
    <Container>
      <h2>History Books</h2>
      <Row className="g-4">
        {books.map((libro) => (
          <Col key={libro.asin} md={4}>
            <Card>
              <Card.Img variant="top" src={libro.img} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>{libro.category}</Card.Text>
                <Card.Text>{libro.price}€</Card.Text>
                <Button variant="dark">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
