import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowCategory from "./components/ShowCategory";
import axios from "axios";
import Footer from "./screens/Footer";

const Welcome = () => {
  const [category, setCategory] = useState([]);

  const allCategory = async () => {
    const { data } = await axios.get("/api/allCategory");
    setCategory(data);
    console.log(data);
  };

  useEffect(() => {
    allCategory();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="justify-content-center text-center mt-5">
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
      <Row className="mt-5">
        <h1 className="text-center">Category</h1>
        {category.map((item) => {
          return (
            <Col md={3} sm={4} key={item.id} className="mt-5">
              <ShowCategory category={item} />
            </Col>
          );
        })}
      </Row>
      <Footer />
    </Container>
  );
};

export default Welcome;
