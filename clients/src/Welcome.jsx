import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="front_header">Welcome to React</h1>
          <Link to="/allProducts" className="front_button">
            Product Page
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
