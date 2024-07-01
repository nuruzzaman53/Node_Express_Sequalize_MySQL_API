const express = require('express');

const reviewController = require('../controller/reviewController');


const reviewRouter = express.Router();


reviewRouter.get('/allReviews',reviewController.allReviews);

reviewRouter.post('/addReview',reviewController.addReview);


module.exports = reviewRouter;

