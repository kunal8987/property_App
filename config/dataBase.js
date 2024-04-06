const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

let connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);
    console.log(`server connection established ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log("error from database file");
  }
};

module.exports = { connection };
