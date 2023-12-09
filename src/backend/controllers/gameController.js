const asyncHandler = require("express-async-handler");


// @desc: Get games771 collection
// @route: GET /api/games771
// @access: Private

const getGames = asyncHandler(async(req, res) => {
    res.status(200).json( {message: "Get games771 collection"})
})

// @desc: Set games771 collection
// @route: POST /api/games771
// @access: Private

const setGame = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please enter a text field");
    }
    res.status(200).json({ message: "Set games771 collection" });
});

// @desc: Update games771
// @route: PUT /api/games771
// @access: Private

const updateGame = asyncHandler(async(req, res) => {
    res.status(200).json( {message: `Update games771 ${req.params.id}`});
})

// @desc: Delete from games771
// @route: DELETE /api/games771
// @access: Private

const deleteGame = asyncHandler(async(req, res) => {
    res.status(200).json( {message: `Delete games771 ${req.params.id}`});
})

module.exports = {
    getGames,
    setGame,
    updateGame,
    deleteGame
}   