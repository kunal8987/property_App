const express = require("express");
const { protector } = require("../utility/auth.middleware");
const {
  addFavorites,
  getFavoritesForUser,
  removeFavorite,
} = require("../controller/favorite.controller");
const favoriteRoute = express.Router();

favoriteRoute.post("/add/favorite", protector, addFavorites);
favoriteRoute.get("/get/favorite", protector, getFavoritesForUser);
favoriteRoute.delete("/remove/favorite/:id", protector, removeFavorite);

module.exports = { favoriteRoute };
