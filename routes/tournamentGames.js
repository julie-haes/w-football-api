// Dependencies
var express = require('express');
var router = express.Router();
var TournamentGameController = require('../controllers/tournamentGames');

// Routes
router.route('/')
    .get(TournamentGameController.index)
    .post(TournamentGameController.createTournamentGame);

router.route('/:tournamentGameId')
    .get(TournamentGameController.getTournamentGame)
    .put(TournamentGameController.replaceTournamentGame)
    .patch(TournamentGameController.updateTournamentGame)
    .delete(TournamentGameController.deleteTournamentGame);

// Return router
module.exports = router;