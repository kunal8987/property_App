const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    // Add other favorite-related fields here
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create the Favorite model
const FavoriteModel = mongoose.model("Favorite", favoriteSchema);

module.exports = { FavoriteModel };
