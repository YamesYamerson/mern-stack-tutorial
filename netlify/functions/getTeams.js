const mongoose = require('mongoose');
const TeamsModel = require('../../models/teamsModel');  // Adjust path as needed

// MongoDB connection
const connectDB = async () => {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI);
    }
};

exports.handler = async (event, context) => {
    await connectDB();

    try {
        const teams = await TeamsModel.find({});
        return {
            statusCode: 200,
            body: JSON.stringify(teams)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};
