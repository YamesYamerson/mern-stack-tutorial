const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName771: {
        type: String,
        required: true
    },
    managerFirstName771: {
        type: String,
        required: true
    },
    managerLastName771: {
        type: String,
        required: true
    },
    players771: [{
        type: String,
        required: true
    }]
});

const team = mongoose.model('teams771', teamSchema);

module.exports = team;