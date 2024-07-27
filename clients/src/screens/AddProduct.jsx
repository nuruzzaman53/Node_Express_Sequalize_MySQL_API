import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const productHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      price: price,
      published: true,
    };
    await axios.post("/api/addProduct", data);
  };

  return (
    <Container>
      <h1>Add a New Product </h1>
      <hr />
      <Row>
        <Col md={5}>
          <form className="product-form">
            <label>Title</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
              type="text"
              rows={8}
              cols={50}
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Price</label>
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={productHandler}> + Create a new product </button>
          </form>
        </Col>
      </Row>
      <br />
      <br />
      <Link to="/allProducts">Go to all products</Link>
    </Container>
  );
};

export default AddProduct;
