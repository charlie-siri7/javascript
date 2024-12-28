// imports
import express from 'express';
import dotenv from "dotenv";
import { connectToDatabase } from './config/database.js';
import itemRoutes from "./routes/route.js";
import cors from 'cors';
// configure dotenv, declare app, initialize port
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware - allows JSON data in req.body
app.use(express.json());
// use cors, items in regards to the URL
app.use(cors());
app.use("/api/items", itemRoutes);
// Connect to database on command and print message
app.listen(PORT, () => {
    connectToDatabase();
    console.log("Server started at http://localhost:" + PORT);
});