const express = require("express");
const { connection } = require("./config/dataBase");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

let port = process.env.PORT || 3500;
app.listen(port, (req, res) => {
  connection();
  console.log("server running on port ", port);
});
