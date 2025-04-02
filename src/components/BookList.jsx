import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ libri }) {
  return (
    <Container>
      <Row>
        {libri.map((libro) => (
          <Col xs="12" md="6" xl="4" key={libro.asin}>
            <SingleBook libro={libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
