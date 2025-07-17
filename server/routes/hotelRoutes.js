import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.post('/', protect, registerHotel); // POST /api/hotels

export default hotelRouter;