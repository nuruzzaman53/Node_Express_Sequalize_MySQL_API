import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCategory = ({ category }) => {
  return (
    <>
      <Card style={{ width: "15rem", marginTop: "10px", textAlign: "center" }}>
        <Card.Img src={category.categoryImage} loading="lazy" />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <Button variant="link">
            <Link to={`/single/${category.id}`}>Show Products</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShowCategory;
