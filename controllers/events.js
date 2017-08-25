// Dependencies
var Event = require('../models/event');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Event.find({})//.populate('country')
            .then(events => {
                res.status(200).json(events);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createEvent: (req, res, next) => {
        var newEvent = new Event(req.body);

        newEvent.save()
            .then(event => {
                res.status(201).json(event);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getEvent: (req, res, next) => {
        var { eventId } = req.params;

        Event.findById(eventId)
            .then(event => {
                res.status(200).json(event);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceEvent: (req, res, next) => {
        var { eventId } = req.params;
        var newEvent = req.body;

        Event.findByIdAndUpdate(eventId, newEvent, { new: true })
            .then(event => {
                res.status(200).json(event);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateEvent: (req, res, next) => {
        var { eventId } = req.params;
        var newEvent = req.body;

        Event.findByIdAndUpdate(eventId, newEvent, { new: true })
            .then(event => {
                res.status(200).json(event);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteEvent: (req, res, next) => {
        var { eventId } = req.params;

        Event.findByIdAndRemove(eventId)
            .then(event => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}