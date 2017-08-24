// Dependencies
var express = require('express');
var router = express.Router();
var CapitalController = require('../controllers/small');

// Routes
router.route('/')
    .get(CapitalController.index)
    .post(CapitalController.createCapital);

router.route('/:smallId')
    .get(CapitalController.getCapital)
    .put(CapitalController.replaceCapital)
    .patch(CapitalController.updateCapital)
    .delete(CapitalController.deleteCapital);

// Return router
module.exports = router;