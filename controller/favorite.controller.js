const { FavoriteModel } = require("../models/favorite.model");
const { PropertyModel } = require("../models/property.model");

const addFavorites = async (req, res) => {
  try {
    let { property, userId, username } = req.body;

    let oldProperty = await PropertyModel.findById(property);
    if (!oldProperty) {
      res.status(404).send({
        success: false,
        massage: " property not found",
      });
    } else {
      let newFavorite = new FavoriteModel({
        userId,
        oldProperty: property,
        username,
      });
      await newFavorite.save();
      res.status(200).send({
        success: true,
        massage: "favorites property added successfully",
        newFavorite,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from add favorites controller",
      error: error.massage,
    });
  }
};

const getFavoritesForUser = async (req, res) => {
  try {
    let { userId } = req.params;
    if (!userId) {
      res.status(404).send({
        success: false,
        massage: "please provide a user id",
        userId,
      });
    } else {
      let favorites = await FavoriteModel.find({ userId: req.body.userId });
      if (!favorites) {
        res.status(404).send({
          success: false,
          massage: "favorite property not found",
        });
      } else {
        res.status(200).send({
          success: true,
          massage: "favorite property found",
          favorites,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from get favorites controller",
      error: error.massage,
    });
  }
};

const removeFavorite = async (req, res) => {
  try {
    let { property } = req.params;
    if (!property) {
      res.status(404).send({
        success: false,
        massage: "please provide a property id",
      });
    } else {
      await FavoriteModel.findByIdAndDelete({ oldProperty: property });

      res.status(200).send({
        success: true,
        massage: "Property removed from favorites successfully",
        favorites,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from remove favorites controller",
      error: error.massage,
    });
  }
};

module.exports = { addFavorites, getFavoritesForUser, removeFavorite };
