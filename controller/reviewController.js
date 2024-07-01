const db = require("../models/model");

const Review = db.reviews;

// Add a new revview //

const addReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(200).send(newReview);
  } catch (error) {
    res.status(400).send(error);
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
