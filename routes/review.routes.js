const express = require("express");
const {
  addReview,
  getReviewsForProperty,
} = require("../controller/review.controller");
const { protector } = require("../utility/auth.middleware");
const reviewRouter = express.Router();

reviewRouter.post("/create", protector, addReview);
reviewRouter.get("/get/review", getReviewsForProperty);

module.exports = { reviewRouter };
