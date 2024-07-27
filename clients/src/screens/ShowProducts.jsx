import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [data, setData] = useState([]);
  const getAllProducts = async () => {
    const products = await axios.get("api/allProducts");
    setData(products.data);
    console.log(products.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Container className="mt-5">
      <h3>Products</h3>
      <Row>
        {data.map((product) => {
          return (
            <Col md={3} sm={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
      <h3 className="btn btn-link btn-block mt-5 ml-5">
        <Link to="/addProduct">Create a new product</Link>
      </h3>
    </Container>
  );
};

export default ShowProducts;
