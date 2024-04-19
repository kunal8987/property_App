const { PropertyModel } = require("../models/property.model");
const { ReviewModel } = require("../models/review.model");

const addReview = async (req, res) => {
  try {
    let { property, userId, rating, comment, username } = req.body;

    let oldProperty = await PropertyModel.findById(property);
    if (!oldProperty) {
      res.status(404).send({
        success: false,
        massage: " property not found",
      });
    } else {
      let newReview = new ReviewModel({
        oldProperty: property,
        userId,
        rating,
        comment,
        username,
      });

      await newReview.save();
      res.status(200).send({
        success: true,
        massage: "review added successfully",
        newReview,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from add review controller",
      error: error.massage,
    });
  }
};

const getReviewsForProperty = async (req, res) => {
  try {
    let { id } = req.params;

    let reviews = await ReviewModel.find({ oldProperty: id });
    res.status(200).send({
      success: true,
      massage: "review found successfully",
      reviews,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from get review controller",
      error: error.massage,
    });
  }
};

module.exports = { addReview, getReviewsForProperty };
