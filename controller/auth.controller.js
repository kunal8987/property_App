const { UserModel } = require("../models/user.model");
const { hashedPassword, comparePassword } = require("../utility/auth.utility");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

const signup = async (req, res) => {
  try {
    let { username, email, password, role } = req.body;

    let existUser = await UserModel.findOne({ email });

    if (existUser) {
      res.status(200).send({
        success: true,
        massage: "user already exists",
      });
    } else {
      let hash = await hashedPassword(password);
      let newUser = await UserModel.create({
        username,
        email,
        password: hash,
        role,
      });
      newUser.save();
      res.status(200).send({
        success: true,
        massage: "user registered successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from auth registration controller",
      error: error.massage,
    });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).send({
        success: false,
        massage: "user not found",
      });
    }

    let match = await comparePassword(password, user.password);

    if (!match) {
      res.status(404).send({
        success: false,
        massage: "wrong password",
      });
    }

    let token = await jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_KEY,
      {
        expiresIn: "2d",
      }
    );

    user.password = undefined;
    res.status(200).send({
      success: true,
      massage: "login successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from auth login controller",
      error: error.massage,
    });
  }
};

module.exports = { signup, login };
