// Dependencies
var Capital = require('../models/small');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Capital.find({})//.populate('country')
            .then(smalls => {
                res.status(200).json(smalls);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createCapital: (req, res, next) => {
        var newCapital = new Capital(req.body);

        newCapital.save()
            .then(small => {
                res.status(201).json(small);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getCapital: (req, res, next) => {
        var { smallId } = req.params;

        Capital.findById(smallId)
            .then(small => {
                res.status(200).json(small);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceCapital: (req, res, next) => {
        var { smallId } = req.params;
        var newCapital = req.body;

        Capital.findByIdAndUpdate(smallId, newCapital, { new: true })
            .then(small => {
                res.status(200).json(small);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateCapital: (req, res, next) => {
        var { smallId } = req.params;
        var newCapital = req.body;

        Capital.findByIdAndUpdate(smallId, newCapital, { new: true })
            .then(small => {
                res.status(200).json(small);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteCapital: (req, res, next) => {
        var { smallId } = req.params;

        Capital.findByIdAndRemove(smallId)
            .then(small => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}