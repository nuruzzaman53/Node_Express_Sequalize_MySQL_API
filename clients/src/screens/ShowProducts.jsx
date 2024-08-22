import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await axios.get("api/allProducts");
      if (products) {
        setData(products.data);
      }
    };
    getAllProducts();
  }, []);

  const categoryItems = ["All", ...new Set(data.map((item) => item.category))];

  const filterProduct =
    selectedCategory === "All"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={2}>
          <h2>Categories</h2>
          {categoryItems.map((category, index) => (
            <div className="mt-2" key={index}>
              <button
                className="btn btn-success-outline fw-bold"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </Col>
        <Col md={10}>
          <Row>
            <h2>Products</h2>
            {filterProduct.map((product) => (
              <Col md={3} sm={4} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <h3 className="btn btn-link btn-block mt-5 ml-5">
        <Link to="/addProduct">Create a new product</Link>
      </h3>
    </Container>
  );
};
export default ShowProducts;
