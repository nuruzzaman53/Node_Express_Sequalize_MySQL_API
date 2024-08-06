import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

const Review = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => {
        return (
          <ListGroup as="ol" key={review.id}>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Comment</div>
                {review.description}
              </div>
              <Badge bg="success" pill>
                {review.rating}
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </>
  );
};

export default Review;
