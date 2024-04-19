const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const protector = async (req, res, next) => {
  try {
    //*DECODE AND VERIFY THE TOKEN
    const decode = jwt.verify(req.headers.Authorization,process.env.JWT_KEY);
    req.body.userId = decode.userId;
    req.body.username = decode.username;
    //*FURTHER PROCESS THROUGH NEXT
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "Error From Auth Middleware",
      error: error,
    });
  }
};

const adminMiddleware = async (req, res, next) => {
  try {
    let admin = await UserModel.findById(req.body.userId);

    if (admin.role === "Admin") {
      next();
    } else {
      res.status(404).send({
        success: false,
        massage: "unauthorized access",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      massage: "Error From Auth Middleware",
      error: error.massage,
    });
  }
};

module.exports = { protector, adminMiddleware };
