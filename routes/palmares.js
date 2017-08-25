// Dependencies
var express = require('express');
var router = express.Router();
var PalmaresController = require('../controllers/palmares');

// Routes
router.route('/')
    .get(PalmaresController.index)
    .post(PalmaresController.createPalmares);

router.route('/:palmaresId')
    .get(PalmaresController.getPalmares)
    .put(PalmaresController.replacePalmares)
    .patch(PalmaresController.updatePalmares)
    .delete(PalmaresController.deletePalmares);

// Return router
module.exports = router;