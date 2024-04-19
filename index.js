const express = require("express");
const { connection } = require("./config/dataBase");
const { authRouter } = require("./routes/auth.routes");
const { userRouter } = require("./routes/user.routes");
const { propertyRouter } = require("./routes/property.routes");
const { bookingRouter } = require("./routes/booking.routes");
const { favoriteRoute } = require("./routes/favorite.routes");
const { reviewRouter } = require("./routes/review.routes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/property", propertyRouter);
app.use("/booking", bookingRouter);
app.use("/favorites", favoriteRoute);
app.use("/reviews", reviewRouter);

let port = process.env.PORT || 3500;
app.listen(port, (req, res) => {
  connection();
  console.log("server running on port ", port);
});
