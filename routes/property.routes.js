const express = require("express");
const {
  addProperty,
  getProperty,
  editProperty,
  deleteProperty,
} = require("../controller/property.controller");
const { protector, adminMiddleware } = require("../utility/auth.middleware");
const propertyRouter = express.Router();

propertyRouter.post("/create", protector, adminMiddleware, addProperty);
propertyRouter.get("/get", getProperty);
propertyRouter.patch("/update/:id", protector, adminMiddleware, editProperty);
propertyRouter.delete(
  "/delete/:id",
  protector,
  adminMiddleware,
  deleteProperty
);

module.exports = { propertyRouter };
