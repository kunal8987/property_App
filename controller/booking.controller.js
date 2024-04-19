const { BookingModel } = require("../models/booking.model");
const { PropertyModel } = require("../models/property.model");

const addBooking = async (req, res) => {
  try {
    let {
      property,
      userId,
      InDate,
      inTime,
      name,
      phone,
      address,
      email,
      username,
    } = req.body;

    let oldProperty = await PropertyModel.findById(property);
    if (!oldProperty) {
      res.status(404).send({
        success: false,
        massage: "property not found",
      });
    } else {
      let newBooking = new BookingModel({
        oldProperty: property,
        userId,
        InDate,
        inTime,
        name,
        phone,
        address,
        email,
        username,
      });

      await newBooking.save();
      res.status(200).send({
        success: true,
        massage: "booking saved successfully",
        newBooking,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from add booking controller",
      error: error.massage,
    });
  }
};

const getBookingsForProperty = async (req, res) => {
  try {
    const { id } = req.params;

    //* Find bookings for the specified property
    const bookings = await BookingModel.find({ oldProperty: id });

    res.status(200).send({
      success: true,
      massage: "booking found successfully",
      bookings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from get booking controller",
      error: error.massage,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    let { id } = req.params;

    await BookingModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      massage: "booking deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "error from delete booking controller",
      error: error.massage,
    });
  }
};

module.exports = { addBooking, getBookingsForProperty, deleteBooking };
