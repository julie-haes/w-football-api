// Dependencies
var express = require('express');
var router = express.Router();
var SelectionController = require('../controllers/selections');

// Routes
router.route('/')
    .get(SelectionController.index)
    .post(SelectionController.createSelection);

router.route('/:smallId')
    .get(SelectionController.getSelection)
    .put(SelectionController.replaceSelection)
    .patch(SelectionController.updateSelection)
    .delete(SelectionController.deleteSelection);

// Return router
module.exports = router;