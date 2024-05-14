import express from "express";
import colors from "colors";
import dotenv from  'dotenv';
import morgan  from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from  'cors';
import productRoutes from  "./routes/productRoutes.js";
import path from 'path';

// configure env
dotenv.config();

// database config
connectDB();

// create express app
const app = express();

// middleware 
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// Serve static files
app.use(express.static(new URL("./client/build", import.meta.url).pathname));

// routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",productRoutes);

// Serve React app for any other routes
app.use("*", function(req, res) {
  res.sendFile(path.join(new URL("./client/build/index.html", import.meta.url).pathname))
})

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
