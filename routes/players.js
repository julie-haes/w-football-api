// Dependencies
var express = require('express');
var router = express.Router();
var PlayerController = require('../controllers/players');

// Routes
router.route('/')
    .get(PlayerController.index)
    .post(PlayerController.createPlayer);

router.route('/:playerId')
    .get(PlayerController.getPlayer)
    .put(PlayerController.replacePlayer)
    .patch(PlayerController.updatePlayer)
    .delete(PlayerController.deletePlayer);

// Return router
module.exports = router;