import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const { id } = useParams();

  const productById = async () => {
    const { data } = await axios.get(`/api/single/${id}`);
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
  };

  useEffect(() => {
    productById();
  });

  const updateProduct = async (e) => {
    e.preventDefault();
    const dataUpdate = {
      title: title,
      description: description,
      price: price,
      published: true,
    };
    await axios.put(`/api/updateProduct/${id}`, dataUpdate);
    alert("Data update successful");
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Product information update</h1>
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
              rows={8}
              cols={50}
              type="text"
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
            <button onClick={updateProduct}> Update product </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
