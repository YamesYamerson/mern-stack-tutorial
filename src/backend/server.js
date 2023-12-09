const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/games771', require('./routes/gameRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});