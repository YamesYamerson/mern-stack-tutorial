const asyncHandler = require("express-async-handler");
const TeamsModel = require("../models/teamsModel"); // Make sure this path is correct

// @desc: Get teams collection
// @route: GET /api/games771/teams771
// @access: Private

const getTeams = asyncHandler(async(req, res) => {
    const teams = await TeamsModel.find({});
    res.status(200).json(teams);
});

// @desc: Set team771 collection
// @route: POST /api/games771/teams771
// @access: Private

const setTeam = asyncHandler(async(req, res) => {
    const { teamName771, managerFirstName771, managerLastName771, players771 } = req.body;

    if (!teamName771 || !managerFirstName771 || !managerLastName771) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }

    const newTeam = new TeamsModel({ teamName771, managerFirstName771, managerLastName771, players771 });
    await newTeam.save();

    res.status(201).json(newTeam);
});

// @desc: Update teams771
// @route: PUT /api/games771/teams771/:id
// @access: Private

const updateTeam = asyncHandler(async(req, res) => {
    const team = await TeamsModel.findById(req.params.id);

    if (!team) {
        res.status(404);
        throw new Error("Team not found");
    }

    const updatedTeam = await TeamsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedTeam);
});

// @desc: Delete from teams771
// @route: DELETE /api/games771/teams771/:id
// @access: Private

const deleteTeam = asyncHandler(async(req, res) => {
    const team = await TeamsModel.findByIdAndDelete(req.params.id);

    if (!team) {
        res.status(404);
        throw new Error("Team not found");
    }

    res.status(200).json({ message: `Deleted team ${req.params.id}` });
});

module.exports = {
    getTeams,
    setTeam,
    updateTeam,
    deleteTeam
};
