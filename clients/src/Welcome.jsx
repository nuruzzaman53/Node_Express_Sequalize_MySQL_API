import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center text-center">
          <h1>Welcome to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            mollitia aspernatur ex ab omnis officiis, sint a et sequi dolor, ut
            tempora excepturi in voluptatibus harum vero impedit! Quibusdam,
            neque!
          </p>
          <Link to="/allProducts" className="btn btn-info">
            Shop acccess tools
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
