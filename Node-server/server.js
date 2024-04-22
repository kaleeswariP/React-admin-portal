import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello world!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`server Running on port ${PORT}`);

});