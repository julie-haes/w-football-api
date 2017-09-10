// Dependencies
var Tournament = require('../models/tournament');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Tournament.find({})//.populate('country')
            .then(tournaments => {
                res.status(200).json(tournaments);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createTournament: (req, res, next) => {
        var newTournament = new Tournament(req.body);

        newTournament.save()
            .then(tournament => {
                res.status(201).json(tournament);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getTournament: (req, res, next) => {
        var { tournamentId } = req.params;

        Tournament.findById(tournamentId)
            .then(tournament => {
                res.status(200).json(tournament);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceTournament: (req, res, next) => {
        var { tournamentId } = req.params;
        var newTournament = req.body;

        Tournament.findByIdAndUpdate(tournamentId, newTournament, { new: true })
            .then(tournament => {
                res.status(200).json(tournament);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateTournament: (req, res, next) => {
        var { tournamentId } = req.params;
        var newTournament = req.body;

        Tournament.findByIdAndUpdate(tournamentId, newTournament, { new: true })
            .then(tournament => {
                res.status(200).json(tournament);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteTournament: (req, res, next) => {
        var { tournamentId } = req.params;

        Tournament.findByIdAndRemove(tournamentId)
            .then(tournament => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    },

    // add team to tournament
    addTeam: (tournamentId, teamId) => {
        console.log("start adding team to tournament!", tournamentId);

        Tournament.findById(tournamentId)
            .then(tournament => {
                var teams = tournament.teams
                teams.push(teamId);
                var tournamentObject = { "teams": teams };

                return Tournament.findByIdAndUpdate(tournament, tournamentObject, { new: true });
            }).catch(error => {
                next(error);
            });

    },

    // add game to tournament
    addGame: (tournamentId, gameId) => {
        console.log("start adding game to tournament!", tournamentId);

        Tournament.findById(tournamentId)
            .then(tournament => {
                var games = tournament.games
                games.push(gameId);
                var tournamentObject = { "games": games };

                return Tournament.findByIdAndUpdate(tournament, tournamentObject, { new: true });
            }).catch(error => {
                next(error);
            });

    }
}