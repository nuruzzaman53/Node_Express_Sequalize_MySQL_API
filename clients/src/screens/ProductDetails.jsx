import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Review from "../components/Review";
import ShowError from "../components/ShowError";
import ShowSuccess from "../components/ShowSuccess";

const ProductDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);

  const productById = async () => {
    const { data } = await axios.get(`/api/getProductReviews/${id}`);
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

  const addReview = async (e) => {
    e.preventDefault();
    try {
      const reviewData = { rating: rating, description: message };
      const newReview = await axios.post(`/api/addReview/${id}`, reviewData);
      if (newReview) {
        setSuccess("Review added successfully");
        setRating("");
        setMessage("");
      }
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors(["An unexpected error occurred"]);
      }
    }
  };

  return (
    <Container>
      <h4>Product Details</h4>
      <Row key={id}>
        <Col md={6}>
          <img
            src={`http://localhost:3000/${productImage}`}
            alt="product-image"
            style={{ width: "400px" }}
          />
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>$ {price}</h3>
          <Link className="btn btn-success" to={`/updateProduct/${id}`}>
            Edit Product
          </Link>
          <button
            onClick={() => deleteHandler(id)}
            className="btn btn-danger mx-5"
          >
            Delete Product
          </button>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="mt-5">
          <h2>Review</h2>
          <Review reviews={reviews} />
        </Col>
        <Col md={6} className="mt-5">
          <h2>Add a review to this product</h2>
          <form>
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control"
            />
            <label>Comment</label>
            <textarea
              name="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              cols={50}
              className="form-control"
            ></textarea>
            <button className="btn btn-info mt-3" onClick={addReview}>
              Submit Review
            </button>
          </form>
          <br />
          {success && <ShowSuccess success={success} />}
          {!success && <ShowError errors={errors} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
