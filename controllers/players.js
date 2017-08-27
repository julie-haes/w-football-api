// Dependencies
var Player = require('../models/player');
var CountryController = require('../controllers/countries');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Player.find({})//.populate('nationality')
            .then(players => {
                res.status(200).json(players);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createPlayer: async (req, res, next) => {
        var newPlayer = new Player(req.body);
        console.log()

        // add player to country
        if (newPlayer.nationality !== null && newPlayer.nationality !== undefined)
        { console.log("add player to nationality"); await CountryController.addPlayer(newPlayer.nationality, newPlayer.id); }

        newPlayer.save()
            .then(player => {
                res.status(201).json(player);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getPlayer: (req, res, next) => {
        var { playerId } = req.params;

        Player.findById(playerId)
            .then(player => {
                res.status(200).json(player);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replacePlayer: (req, res, next) => {
        var { playerId } = req.params;
        var newPlayer = req.body;

        Player.findByIdAndUpdate(playerId, newPlayer, { new: true })
            .then(player => {
                res.status(200).json(player);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updatePlayer: (req, res, next) => {
        var { playerId } = req.params;
        var newPlayer = req.body;

        Player.findByIdAndUpdate(playerId, newPlayer, { new: true })
            .then(player => {
                res.status(200).json(player);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deletePlayer: (req, res, next) => {
        var { playerId } = req.params;

        Player.findByIdAndRemove(playerId)
            .then(player => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}