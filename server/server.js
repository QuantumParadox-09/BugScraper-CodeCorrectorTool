require('dotenv').config();
const express = require('express');
const path = require('path');
const analyzeRoute = require('./routes/analyzeRoute'); // Ensure this is a valid router

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Add logging to verify middleware and route setup
console.log('Setting up middleware and routes');

// Use the route without the upload middleware
app.use('/analyze-code', analyzeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});