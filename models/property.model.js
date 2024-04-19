const mongoose = require("mongoose");

let propertySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let PropertyModel = mongoose.model("Property", propertySchema);

module.exports = { PropertyModel };
