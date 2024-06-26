const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    InDate: { type: Date, required: true },
    inTime: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },

    username: { type: String, required: true },
    // Add other booking-related fields here
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create the Booking model
const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = { BookingModel };
