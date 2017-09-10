// Dependencies
var Team = require('../models/team');
var CountryController = require('../controllers/countries');
var CompetitionController = require('../controllers/competitions');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Team.find({})//.populate('country')
            .then(teams => {
                res.status(200).json(teams);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createTeam: async (req, res, next) => {
        var newTeam = new Team(req.body);

        // add team to country
        if (newTeam.country !== null && newTeam.country !== undefined)
        { console.log("add team to country"); await CountryController.addTeam(newTeam.country, newTeam.id); }

        // add team to competition(s)
        if (newTeam.competitions.length > 0 && newTeam.competitions !== undefined && newTeam.competitions !== null)
        { 
            var comps = newTeam.competitions;
            console.log("add team to competition"); 
            comps.map(competition => {
                console.log(competition);
                await CompetitionController.addTeam(competition, newTeam.id);
            })
        }

        // add team to tournaments(s)
        if (newTeam.tournaments.length > 0 && newTeam.tournaments !== undefined && newTeam.tournaments !== null)
            { 
                var tournaments = newTeam.tournaments;
                console.log("add team to tournament"); 
                tournaments.map(tournament => {
                    console.log(tournament);
                    await TournamentController.addTeam(tournament, newTeam.id);
                })
            }

        newTeam.save()
            .then(team => {
                res.status(201).json(team);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getTeam: (req, res, next) => {
        var { teamId } = req.params;

        Team.findById(teamId)
            .then(team => {
                res.status(200).json(team);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceTeam: (req, res, next) => {
        var { teamId } = req.params;
        var newTeam = req.body;

        Team.findByIdAndUpdate(teamId, newTeam, { new: true })
            .then(team => {
                res.status(200).json(team);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateTeam: (req, res, next) => {
        var { teamId } = req.params;
        var newTeam = req.body;

        Team.findByIdAndUpdate(teamId, newTeam, { new: true })
            .then(team => {
                res.status(200).json(team);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteTeam: (req, res, next) => {
        var { teamId } = req.params;

        Team.findByIdAndRemove(teamId)
            .then(team => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    },

    // add selection
    addSelection: (teamId, selectionId) => {
        console.log("start adding selection to team!");
        Team.findById(teamId)
            .then(team => {
                var selections = team.selections
                selections.push(selectionId);
                var teamObject = { "selections": selections };

                return Team.findByIdAndUpdate(teamId, teamObject, { new: true });
            })
            .catch(error => {
                next(error);
            });
    },

    // add game
    addGame: (teamId, gameId) => {
        console.log("start adding game to team!", teamId);

        Team.findById(teamId)
            .then(team => {
                var games = team.games
                games.push(gameId);
                var teamObject = { "games": games };

                return Team.findByIdAndUpdate(teamId, teamObject, { new: true });
            }).catch(error => {
                next(error);
            });

    }
}