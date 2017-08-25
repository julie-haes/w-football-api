// Dependencies
var Game = require('../models/game');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Game.find({})//.populate('country')
            .then(games => {
                res.status(200).json(games);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createGame: (req, res, next) => {
        var newGame = new Game(req.body);

        newGame.save()
            .then(game => {
                res.status(201).json(game);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getGame: (req, res, next) => {
        var { gameId } = req.params;

        Game.findById(gameId)
            .then(game => {
                res.status(200).json(game);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceGame: (req, res, next) => {
        var { gameId } = req.params;
        var newGame = req.body;

        Game.findByIdAndUpdate(gameId, newGame, { new: true })
            .then(game => {
                res.status(200).json(game);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateGame: (req, res, next) => {
        var { gameId } = req.params;
        var newGame = req.body;

        Game.findByIdAndUpdate(gameId, newGame, { new: true })
            .then(game => {
                res.status(200).json(game);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteGame: (req, res, next) => {
        var { gameId } = req.params;

        Game.findByIdAndRemove(gameId)
            .then(game => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}