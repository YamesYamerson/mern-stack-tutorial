const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    lastName771: {
        type: String,
        required: true
    },
    firstName771: {
        type: String,
        required: true
    },
    phone771: {
        type: String,
        required: true
    },
    teamPreferences771: [{
        type: String,
        required: true
    }]
});

const team = mongoose.model('teams771', teamSchema);

module.exports = team;