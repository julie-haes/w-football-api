// Dependencies
var express = require('express');
var router = express.Router();
var TournamentController = require('../controllers/tournaments');

// Routes
router.route('/')
    .get(TournamentController.index)
    .post(TournamentController.createTournament);

router.route('/:tournamentId')
    .get(TournamentController.getTournament)
    .put(TournamentController.replaceTournament)
    .patch(TournamentController.updateTournament)
    .delete(TournamentController.deleteTournament);

// Return router
module.exports = router;