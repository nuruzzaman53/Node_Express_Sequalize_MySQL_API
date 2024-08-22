import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} sm={5}>
          <h2>Future Cart</h2>
        </Col>
        <Col md={6} sm={7}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/addCategory">Categories</Link>
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
