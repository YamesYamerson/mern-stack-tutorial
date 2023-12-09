const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = express();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('api/games771', require('./routes/gameRoutes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});