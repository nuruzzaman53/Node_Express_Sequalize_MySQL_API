import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <h2 className="product_price">$ {product.price}</h2>
          </Card.Text>
          <Button variant="link">
            <Link to={`/single/${product.id}`}>Product Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
