const express  = require('express');
const router  = express.Router();

const { getPlayers, setPlayer, updatePlayer, deletePlayer } = require('../controllers/playerController.js');


router.route('/').get(getPlayers).post(setPlayer);   
router.route('/:id').put(updatePlayer).delete(deletePlayer);

module.exports = router;