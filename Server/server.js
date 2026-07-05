const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // 1. Import Mongoose
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 2. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas.'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Test Route
app.get('/', (req, res) => {
    res.send('Customer Registry Backend API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});