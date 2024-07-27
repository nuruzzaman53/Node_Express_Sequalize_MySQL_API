import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [reviews, setReviews] = useState([]);

  const productById = async () => {
    const { data } = await axios.get(`/api/getProductReviews/${id}`);
    console.log(data);
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
    setProductImage(data.image);
    setReviews(data.review);
  };

  useEffect(() => {
    productById();
  });

  const deleteHandler = async (productId) => {
    await axios.delete(`/api/deleteProduct/${productId}`);
    alert("Product deleted");
  };

  return (
    <Container>
      <h4>Product Details</h4>
      <Row>
        <Col md={7} key={id}>
          <img
            src={`http://localhost:3000/${productImage}`}
            alt="product-image"
          />
        </Col>
        <Col md={5}>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>$ {price}</h3>
          <Link className="btn btn-success" to={`/updateProduct/${id}`}>
            Edit Product
          </Link>
          <br />
          <br />
          <button
            onClick={() => deleteHandler(id)}
            className="btn btn-danger ml-5"
          >
            Delete Product
          </button>
        </Col>
      </Row>
      <Col md={6} className="mt-5">
        <h2>Review</h2>
        {reviews.map((review) => {
          return (
            <ListGroup as="ol" key={id}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Comment</div>
                  {review.description}
                </div>
                <Badge bg="primary" pill>
                  {review.rating}
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </Col>
    </Container>
  );
};

export default ProductDetails;
