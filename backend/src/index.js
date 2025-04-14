const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB(process.env.MONGODB_URI);

// Health check route
app.get('/api/health', (req, res) => {
    res.send('HEALTHY');
});

// Set up routes
app.use('/api/tasks', tasksRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});