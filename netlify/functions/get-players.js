const mongoose = require('mongoose');
const PlayersModel = require('../../models/playersModel'); // Adjust path as needed

// MongoDB connection
const connectDB = async () => {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
};

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
