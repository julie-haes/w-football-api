// Dependencies
var Game = require('../models/game');
var TeamController = require('../controllers/teams');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Game.find({}).populate(['hometeam', 'awayteam'])
            .then(games => {
                res.status(200).json(games);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createGame: async (req, res, next) => {
        var newGame = new Game(req.body);
        
        // add game to hometeam
        if (newGame.hometeam !== null && newGame.hometeam !== undefined)
        { console.log("add game to hometeam"); await TeamController.addGame(newGame.hometeam, newGame.id); }

        // add game to awayteam
        if (newGame.awayteam !== null && newGame.awayteam !== undefined)
        { console.log("add game to awayteam"); await TeamController.addGame(newGame.awayteam, newGame.id); }

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