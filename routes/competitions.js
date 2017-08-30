// Dependencies
var express = require('express');
var router = express.Router();
var CompetitionController = require('../controllers/competitions');

// Routes
router.route('/')
    .get(CompetitionController.index)
    .post(CompetitionController.createCompetition);

router.route('/:competitionId')
    .get(CompetitionController.getCompetition)
    .put(CompetitionController.replaceCompetition)
    .patch(CompetitionController.updateCompetition)
    .delete(CompetitionController.deleteCompetition);

router.route('/game/:competitionId')
    .post(CompetitionController.addGame);

// Return router
module.exports = router;