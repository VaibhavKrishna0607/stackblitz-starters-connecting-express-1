require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000 ;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
.then(() => console.log("Connected to database"))
.catch((error) => console.error("Error connecting to database:", error));

app.get('/', (req, res) => {
    res.json("Well done")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

