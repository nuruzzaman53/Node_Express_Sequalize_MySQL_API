const db = require("../models/model");

const Review = db.reviews;

// Add a new revview //

const addReview = async (req, res) => {
  const productId = req.params.id;
  try {
    let info = {
      product_id: productId,
      rating: req.body.rating,
      description: req.body.description,
    };
    const newReview = await Review.create(info);
    res.status(200).send({ success: true, data: newReview });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((e) => e.message);
      res.status(400).send({ success: false, errors });
    } else {
      res
        .status(500)
        .send({ success: false, message: "An unexpected error occurred " });
    }
  }
};

// get all review //

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({});
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { addReview, allReviews };
