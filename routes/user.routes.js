const {
  getAllUsers,
  singleUser,
  deleteUser,
} = require("../controller/user.controller");

const { adminMiddleware, protector } = require("../utility/auth.middleware");
const express = require("express");

const userRouter = express.Router();

userRouter.get("/all-users", protector, adminMiddleware, getAllUsers);
userRouter.get("/user/:id", protector, adminMiddleware, singleUser);
userRouter.delete("/user/delete/:id", protector, adminMiddleware, deleteUser);

module.exports = { userRouter };
