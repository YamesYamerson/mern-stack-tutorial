const mongoose = require('mongoose');
const playersModel = require('../../models/playersModel');  // Adjust path as needed

// MongoDB connection
const connectDB = async () => {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI);
    }
};

exports.handler = async (event, context) => {
    await connectDB();

    try {
        const players771 = await playersModel.find({});
        return {
            statusCode: 200,
            body: JSON.stringify(players771)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};
