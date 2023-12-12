const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
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

const player = mongoose.model('players771', playerSchema);

module.exports = player;