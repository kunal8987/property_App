const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    // Add other review-related fields here
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create the Review model
const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = { ReviewModel };
