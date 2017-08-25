// Dependencies
var express = require('express');
var router = express.Router();
var GameController = require('../controllers/games');

// Routes
router.route('/')
    .get(GameController.index)
    .post(GameController.createGame);

router.route('/:gameId')
    .get(GameController.getGame)
    .put(GameController.replaceGame)
    .patch(GameController.updateGame)
    .delete(GameController.deleteGame);

// Return router
module.exports = router;