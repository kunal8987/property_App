const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
