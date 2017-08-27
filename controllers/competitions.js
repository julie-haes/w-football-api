// Dependencies
var Competition = require('../models/competition');
var CountryController = require('../controllers/countries');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Competition.find({}).populate('teams')
            .then(competitions => {
                res.status(200).json(competitions);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createCompetition: async (req, res, next) => {
        var newCompetition = new Competition(req.body);

        // add competition to country
        if (newCompetition.country !== null || newCompetition.country !== undefined)
        { console.log("add to country"); await CountryController.addCompetition(newCompetition.country, newCompetition.id); }

        // add subcompetition to maincompetition if applicable
        if (newCompetition.isSubcompetition === true && newCompetition.maincompetition !== null || newCompetition.maincompetition !== undefined)
        { console.log("add to maincompetition"); await module.exports.addSubcompetition(newCompetition.maincompetition, newCompetition.id); }

        newCompetition.save()
            .then(competition => {
                res.status(201).json(competition);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getCompetition: (req, res, next) => {
        var { competitionId } = req.params;

        Competition.findById(competitionId)
            .then(competition => {
                res.status(200).json(competition);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceCompetition: (req, res, next) => {
        var { competitionId } = req.params;
        var newCompetition = req.body;

        Competition.findByIdAndUpdate(competitionId, newCompetition, { new: true })
            .then(competition => {
                res.status(200).json(competition);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateCompetition: (req, res, next) => {
        var { competitionId } = req.params;
        var newCompetition = req.body;

        Competition.findByIdAndUpdate(competitionId, newCompetition, { new: true })
            .then(competition => {
                res.status(200).json(competition);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteCompetition: (req, res, next) => {
        var { competitionId } = req.params;

        Competition.findByIdAndRemove(competitionId)
            .then(competition => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    },

    // add subcompetition to maincompetition
    addSubcompetition: (mainCompetitionId, subcompetitionId) => {
        Competition.findById(mainCompetitionId)
            .then(maincompetition => {
                var subcompetitions = maincompetition.subcompetitions;
                subcompetitions.push(subcompetitionId);
                var subcompetitionObject = { "subcompetitions": subcompetitions };

                return Competition.findByIdAndUpdate(mainCompetitionId, subcompetitionObject, { new: true });
            })
            .catch(error => {
                next(error);
            });
    },

    // add team
    addTeam: (competitionId, teamId) => {
        console.log("start adding team to competitions!", competitionId);

        Competition.findById(competitionId)
            .then(competition => {
                var teams = competition.teams
                teams.push(teamId);
                var competitionObject = { "teams": teams };

                return Competition.findByIdAndUpdate(competition, competitionObject, { new: true });
            }).catch(error => {
                next(error);
            });

    }
}