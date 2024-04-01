require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB, isConnected } = require("./config/dbConn.js");
const { childrenRouter } = require("./Routes/Children.routes.js");
const { signup } = require("./Authroutes.js");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/", childrenRouter);
app.use("/", signup);

// Ping Route
app.get('/ping', (req, res) => {
    res.send('Hello NODE API');
});

// Home Route
app.get('/home', (req, res) => {
    res.json({
        message: isConnected() ? "Database is connected" : "Database is disconnected"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log('Server is running on port', PORT);
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
});
