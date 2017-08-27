// Dependencies
var Country = require('../models/country');

// Methods
module.exports = {
    // Show all records
    index: (req, res, next) => {
        Country.find({})//.populate('players')
            .then(countries => {
                res.status(200).json(countries);
            })
            .catch(error => {
                next(error);
            });
    },

    // Create one record
    createCountry: (req, res, next) => {
        var newCountry = new Country(req.body);

        newCountry.save()
            .then(country => {
                res.status(201).json(country);
            })
            .catch(error => {
                next(error);
            });
    },

    // Show one record by id
    getCountry: (req, res, next) => {
        var { countryId } = req.params;

        Country.findById(countryId)
            .then(country => {
                res.status(200).json(country);
            })
            .catch(error => {
                next(error);
            });
    },

    // Replace the data of one record by id    
    replaceCountry: (req, res, next) => {
        var { countryId } = req.params;
        var newCountry = req.body;

        Country.findByIdAndUpdate(countryId, newCountry, { new: true })
            .then(country => {
                res.status(200).json(country);
            })
            .catch(error => {
                next(error);
            });
    },

    // update the data of one record by id
    updateCountry: (req, res, next) => {
        var { countryId } = req.params;
        var newCountry = req.body;

        Country.findByIdAndUpdate(countryId, newCountry, { new: true })
            .then(country => {
                res.status(200).json(country);
            })
            .catch(error => {
                next(error);
            });
    },

    // delete one record by id    
    deleteCountry: (req, res, next) => {
        var { countryId } = req.params;

        Country.findByIdAndRemove(countryId)
            .then(country => {
                res.status(204).json();
            })
            .catch(error => {
                next(error);
            });
    },

    // add competition
    addCompetition: (countryId, competitionId) => {
        Country.findById(countryId)
            .then(country => {
                var competitions = country.competitions
                competitions.push(competitionId);
                var countryObject = { "competitions": competitions };

                return Country.findByIdAndUpdate(countryId, countryObject, { new: true });
            })
            .catch(error => {
                next(error);
            });
    },

    // add team
    addTeam: (countryId, teamId) => {
        console.log("start adding team to country!");
        Country.findById(countryId)
            .then(country => {
                var teams = country.teams
                teams.push(teamId);
                var countryObject = { "teams": teams };

                return Country.findByIdAndUpdate(countryId, countryObject, { new: true });
            })
            .catch(error => {
                next(error);
            });
    },

    // add player
    addPlayer: (countryId, playerId) => {
        console.log("start adding player to country!");
        Country.findById(countryId)
            .then(country => {
                var players = country.players
                players.push(playerId);
                var countryObject = { "players": players };

                return Country.findByIdAndUpdate(countryId, countryObject, { new: true });
            })
            .catch(error => {
                next(error);
            });
    }
}