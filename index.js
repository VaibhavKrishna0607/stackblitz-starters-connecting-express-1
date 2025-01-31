require('dotenv').config(); // Load environment variables
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3010;
const MONGO_URI = process.env.MONGO_URI;

// Serve static files
app.use(express.static('static'));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database"))
.catch((error) => console.error("Error connecting to database:", error));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

