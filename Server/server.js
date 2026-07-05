const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(express.json()); // Built-in body-parser middleware for parsing application/json data
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlencoded payloads

// Test Route
app.get('/', (req, res) => {
    res.send('Customer Registry Backend API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});