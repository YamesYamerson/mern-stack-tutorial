const asyncHandler = require("express-async-handler");
const playersModel = require("../models/playersModel");
const mongoose = require("mongoose");
mongoose.pluralize(null);

async function logPlayers() {
    try {
        console.log('Fetching players...');
        const players = await playersModel.find({player771});
        console.log('Players:', players);
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}

logPlayers();


// @desc: Get games771 collection
// @route: GET /api/games771
// @access: Private

const getPlayers = asyncHandler(async(req, res) => {
    const players771 = await playersModel.find({});
    res.status(200).json(players771)
})

// @desc: Set games771 collection
// @route: POST /api/players771
// @access: Private

const setPlayer = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please enter a text field");
    }
    res.status(200).json({ message: "Set players771 collection" });
});

// @desc: Update games771
// @route: PUT /api/games771
// @access: Private

const updatePlayer = asyncHandler(async(req, res) => {
    res.status(200).json( {message: `Update players771 ${req.params.id}`});
})

// @desc: Delete from games771
// @route: DELETE /api/games771
// @access: Private

const deletePlayer = asyncHandler(async(req, res) => {
    res.status(200).json( {message: `Delete players771 ${req.params.id}`});
})

module.exports = {
    getPlayers,
    setPlayer,
    updatePlayer,
    deletePlayer
}   