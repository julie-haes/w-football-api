// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var competitionSchema = new Schema({
    full_name: String,
    name: String,
    code: String,
    year: String,
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    },
    matchdays: Number,
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    isSubcompetition: Boolean,
    isMaincompetition: Boolean,
    maincompetition: {  // if (subcompetition === true)
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    },
    subcompetitions: [{ // if (maincompetition === true)
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    }]
});

// Return model
module.exports = mongoose.model('Competition', competitionSchema);