const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please add a text value'],
    },
},{
    timestamps: true,
});

module.exports = mongoose.model('Games771', gamesSchema);