import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className='mt-3'>
      <Row>
        <Col>
          <h1>Future Cart</h1>
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
                <Link to="/portfolio">Portfolio </Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <hr/>
    </Container>
  );
};

export default Menu;
