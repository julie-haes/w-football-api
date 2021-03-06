// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var gameSchema = new Schema({
    // competition : {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Competition'
    // },
    matchday: Number,
    venue: String,
    status: String,
    time: String,
    date: String,
    hometeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    awayteam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    hometeam_score: String,
    awayteam_score: String,
    halftime_score: String,
    fulltime_score: String,
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    startingXI_hometeam: {
        'captain': {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        'goalkeeper': {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        'players': [{
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }]
    },
    startingXI_awayteam: {
        'captain': {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        'goalkeeper': {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        'players': [{
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }]
    },
    substitutes_hometeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    substitutes_awayteam: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    referee: String //,
    // tournament_game: Boolean
});

// Return model
module.exports = mongoose.model('Game', gameSchema);