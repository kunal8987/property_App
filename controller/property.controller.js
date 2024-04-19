const { PropertyModel } = require("../models/property.model");

const addProperty = async (req, res) => {
  try {
    let newProperty = await PropertyModel.create(req.body);
    newProperty.save();
    res.status(200).send({
      success: true,
      massage: "property added successfully",
      newProperty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from add property controller",
      error: error.massage,
    });
  }
};

const getProperty = async (req, res) => {
  try {
    let properties = await PropertyModel.find();
    if (!properties) {
      res.status(404).send({
        success: false,
        massage: " property not available for sales",
      });
    } else {
      res.status(200).send({
        success: true,
        massage: "property found successfully",
        properties,
        count: properties.length,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from get property controller",
      error: error.massage,
    });
  }
};

const editProperty = async (req, res) => {
  try {
    let { id } = req.params;
    let oldProperty = await PropertyModel.findById({ _id: id });
    if (!oldProperty) {
      res.status(404).send({
        success: false,
        massage: " property not found !",
      });
    } else {
      let updatedProperty = await PropertyModel.findByIdAndUpdate(
        { _id: id },
        req.body
      );
      res.status(200).send({
        success: true,
        massage: "property updated successfully",
        updatedProperty,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from edit property controller",
      error: error.massage,
    });
  }
};

const deleteProperty = async (req, res) => {
  try {
    let { id } = req.params;

    await PropertyModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      massage: "property deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from delete property controller",
      error: error.massage,
    });
  }
};

module.exports = { addProperty, getProperty, editProperty, deleteProperty };
