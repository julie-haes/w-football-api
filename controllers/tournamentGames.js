// Dependencies
var TournamentGame = require('../models/tournamentGame');
var TournamentController = require('../controllers/tournaments');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        TournamentGame.find({})//.populate('country')
            .then(tournamentGames => {
                res.status(200).json(tournamentGames);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createTournamentGame: (req, res, next) => {
        var newTournamentGame = new TournamentGame(req.body);
        var newGame = new Game(newTournamentGame.game);

        await newGame.save();

        // add game to tournament
        if (newTournamentGame.tournament !== null && newTournamentGame.tournament !== undefined)
        { console.log("add game to tournament"); await TournamentController.addGame(newTournamentGame.tournament, newTournamentGame.id); }

        newTournamentGame.save()
            .then(tournamentGame => {
                res.status(201).json(tournamentGame);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getTournamentGame: (req, res, next) => {
        var { tournamentGameId } = req.params;

        TournamentGame.findById(tournamentGameId)
            .then(tournamentGame => {
                res.status(200).json(tournamentGame);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceTournamentGame: (req, res, next) => {
        var { tournamentGameId } = req.params;
        var newTournamentGame = req.body;

        TournamentGame.findByIdAndUpdate(tournamentGameId, newTournamentGame, { new: true })
            .then(tournamentGame => {
                res.status(200).json(tournamentGame);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateTournamentGame: (req, res, next) => {
        var { tournamentGameId } = req.params;
        var newTournamentGame = req.body;

        TournamentGame.findByIdAndUpdate(tournamentGameId, newTournamentGame, { new: true })
            .then(tournamentGame => {
                res.status(200).json(tournamentGame);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteTournamentGame: (req, res, next) => {
        var { tournamentGameId } = req.params;

        TournamentGame.findByIdAndRemove(tournamentGameId)
            .then(tournamentGame => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    }
}