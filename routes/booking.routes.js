
const express = require('express');
const { addBooking, getBookingsForProperty } = require('../controller/booking.controller');
const { protector, adminMiddleware } = require("../utility/auth.middleware");
const bookingRouter = express.Router();


bookingRouter.post('/create', protector,addBooking)
bookingRouter.get('/get', protector, adminMiddleware, getBookingsForProperty)
bookingRouter.delete('/delete/:id', protector, adminMiddleware, getBookingsForProperty)


module.exports ={bookingRouter}