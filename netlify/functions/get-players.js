const mongoose = require('mongoose');
const db = require('./config/db');
const PlayersModel = require('../../models/playersModel'); // Adjust path as needed

// MongoDB connection


exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectDB();

    try {
        const players = await PlayersModel.find({});
        return {

            statusCode: 200,
            body: JSON.stringify(players)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};
