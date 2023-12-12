const express = require('express');
const router = express.Router();

const { getTeams, setTeam, updateTeam, deleteTeam } = require('../controllers/teamController.js');

// Routes for handling team-related requests
router.route('/').get(getTeams).post(setTeam);
router.route('/:id').put(updateTeam).delete(deleteTeam);

module.exports = router;
