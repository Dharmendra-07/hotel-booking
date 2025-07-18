import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDb from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouters from './routes/userRoutes.js';
import hotelRouter from './routes/hotelRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import connectCloudinary from './configs/cloudinary.js';

connectDb();
connectCloudinary();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Clerk Webhooks
app.use('/api/clerk', clerkWebhooks);

// ✅ Mount routers
app.use('/api/user', userRouters);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

app.get('/', (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));