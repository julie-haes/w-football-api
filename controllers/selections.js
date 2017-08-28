// Dependencies
var Selection = require('../models/selection');
var TeamController = require('../controllers/teams');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Selection.find({})//.populate('country')
            .then(selections => {
                res.status(200).json(selections);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createSelection: async (req, res, next) => {
        var newSelection = new Selection(req.body);

        // add selection to team
        if (newSelection.team !== null && newSelection.team !== undefined)
        { console.log("add selection to team"); await TeamController.addSelection(newSelection.team, newSelection.id); }

        newSelection.save()
            .then(selection => {
                res.status(201).json(selection);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getSelection: (req, res, next) => {
        var { selectionId } = req.params;

        Selection.findById(selectionId)
            .then(selection => {
                res.status(200).json(selection);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceSelection: (req, res, next) => {
        var { selectionId } = req.params;
        var newSelection = req.body;

        Selection.findByIdAndUpdate(selectionId, newSelection, { new: true })
            .then(selection => {
                res.status(200).json(selection);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateSelection: (req, res, next) => {
        var { selectionId } = req.params;
        var newSelection = req.body;

        Selection.findByIdAndUpdate(selectionId, newSelection, { new: true })
            .then(selection => {
                res.status(200).json(selection);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteSelection: (req, res, next) => {
        var { selectionId } = req.params;

        Selection.findByIdAndRemove(selectionId)
            .then(selection => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    },

    // add player to selection
    addPlayer: (req, res, next) => {
        var { player } = req.body;
        var { selectionId } = req.params;

        console.log("start adding player to selection!");
        Selection.findById(selectionId)
            .then(selection => {
                var players = selection.players;
                players.push(player);
                var selectionObject = { "players": players };

                return Selection.findByIdAndUpdate(selectionId, selectionObject, { new: true });
            }).then(selection => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}