const express = require("express");
const { signup, login } = require("../controller/auth.controller");

let authRouter = express.Router();

authRouter.post("/register", signup);
authRouter.post("/signIn", login);

module.exports = { authRouter };
