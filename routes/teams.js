// Dependencies
var express = require('express');
var router = express.Router();
var TeamController = require('../controllers/teams');

// Routes
router.route('/')
    .get(TeamController.index)
    .post(TeamController.createTeam);

router.route('/:teamId')
    .get(TeamController.getTeam)
    .put(TeamController.replaceTeam)
    .patch(TeamController.updateTeam)
    .delete(TeamController.deleteTeam);

// Return router
module.exports = router;