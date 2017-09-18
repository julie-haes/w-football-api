// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var tournamentSchema = new Schema({
    name: String,
    code: String,
    year: String,
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    },
    start_date: String,
    end_date: String,
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    topscorer: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    number_of_teams: Number,
    games : [{
        type: Schema.Types.ObjectId,
        ref: 'TournamentGame'
    }],
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }]
});

// Return model
module.exports = mongoose.model('Tournament', tournamentSchema);