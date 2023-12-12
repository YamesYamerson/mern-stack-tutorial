const asyncHandler = require("express-async-handler");
const playersModel = require("../models/playersModel");
const mongoose = require("mongoose");
mongoose.pluralize(null);

// Test code for playersModel
// async function logPlayers() {
//     try {
//         console.log('Fetching players...');
//         const players = await playersModel.find({player771});
//         console.log('Players:', players);
//     } catch (error) {
//         console.error('Error fetching players:', error);
//     }
// }

// logPlayers();


// @desc: Get player collection
// @route: GET /api/games771/plaeys771
// @access: Private

const getPlayers = asyncHandler(async(req, res) => {
    const players771 = await playersModel.find({});
    res.status(200).json(players771)
})

// @desc: Set player771 collection
// @route: POST /api/games771/players771
// @access: Private

const setPlayer = asyncHandler(async(req, res) => {
    const { lastName771, firstName771, phone771, teamPreferences771 } = req.body;

    if (!lastName771 || !firstName771 || !phone771 || !teamPreferences771) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }

    const newPlayer = new playersModel({ lastName771, firstName771, phone771, teamPreferences771 });
    await newPlayer.save();

    res.status(201).json(newPlayer);
});


// @desc: Update players771
// @route: PUT /api/games771/players771
// @access: Private

const updatePlayer = asyncHandler(async(req, res) => {
    const player = await playersModel.findById(req.params.id);

    if (!player) {
        res.status(404);
        throw new Error("Player not found");
    }

    // Update player with new values. Only updates fields that are provided in req.body
    const updatedPlayer = await playersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedPlayer);
});


// @desc: Delete from players771
// @route: DELETE /api/games771/players771
// @access: Private

const deletePlayer = asyncHandler(async(req, res) => {
    const player = await playersModel.findByIdAndDelete(req.params.id);

    if (!player) {
        res.status(404);
        throw new Error("Player not found");
    }

    res.status(200).json({ message: `Deleted player ${req.params.id}` });
});



module.exports = {
    getPlayers,
    setPlayer,
    updatePlayer,
    deletePlayer
}   