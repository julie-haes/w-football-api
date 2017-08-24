// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var tournamentGameSchema = new Schema({
    name: String,
    stage: String,
    group: String,
    tournament: {
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
});

// Return model
module.exports = mongoose.model('TournamentGame', tournamentGameSchema);