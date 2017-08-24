// Dependencies
var Team = require('../models/team');

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
    createTeam: (req, res, next) => {
        var newTeam = new Team(req.body);

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
    }
}