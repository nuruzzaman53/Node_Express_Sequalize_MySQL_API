import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2>Future Cart</h2>
        </Col>
        <Col>
          <nav>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/allProducts">All Products </Link>
              </li>
              <li>
                <Link to="/cart">Cart </Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Menu;
