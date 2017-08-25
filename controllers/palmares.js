// Dependencies
var Palmares = require('../models/palmares');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Palmares.find({})//.populate('country')
            .then(palmares => {
                res.status(200).json(palmares);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createPalmares: (req, res, next) => {
        var newPalmares = new Palmares(req.body);

        newPalmares.save()
            .then(palmares => {
                res.status(201).json(palmares);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getPalmares: (req, res, next) => {
        var { palmaresId } = req.params;

        Palmares.findById(palmaresId)
            .then(palmares => {
                res.status(200).json(palmares);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replacePalmares: (req, res, next) => {
        var { palmaresId } = req.params;
        var newPalmares = req.body;

        Palmares.findByIdAndUpdate(palmaresId, newPalmares, { new: true })
            .then(palmares => {
                res.status(200).json(palmares);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updatePalmares: (req, res, next) => {
        var { palmaresId } = req.params;
        var newPalmares = req.body;

        Palmares.findByIdAndUpdate(palmaresId, newPalmares, { new: true })
            .then(palmares => {
                res.status(200).json(palmares);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deletePalmares: (req, res, next) => {
        var { palmaresId } = req.params;

        Palmares.findByIdAndRemove(palmaresId)
            .then(palmares => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}