const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

let connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`server connection established ${mongoose.connection.host}`);
  } catch (error) { 
    console.log(error.massage);
    console.log("error from database file");
  }
};

module.exports = { connection };
