const { UserModel } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    let user = await UserModel.find();
    res.status(200).send({
      success: true,
      massage: "user list found",
      user,
      count: user.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from user getAll controller",
      error: error.massage,
    });
  }
};

const singleUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await UserModel.findOne({ _id: id });
    res.status(200).send({
      success: true,
      massage: "user found",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from user single controller",
      error: error.massage,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    await UserModel.findByIdAndDelete({ _id: id });

    res.status(200).send({
      success: true,
      massage: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from user update controller",
      error: error.massage,
    });
  }
};

module.exports = { getAllUsers, singleUser, deleteUser };
