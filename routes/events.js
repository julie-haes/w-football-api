// Dependencies
var express = require('express');
var router = express.Router();
var EventController = require('../controllers/events');

// Routes
router.route('/')
    .get(EventController.index)
    .post(EventController.createEvent);

router.route('/:eventId')
    .get(EventController.getEvent)
    .put(EventController.replaceEvent)
    .patch(EventController.updateEvent)
    .delete(EventController.deleteEvent);

// Return router
module.exports = router;