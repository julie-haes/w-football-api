// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var teamSchema = new Schema({
    name: String,
    nickname: String,
    place: String,
    crest: String,
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    },
    competitions: [{
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    }],
    nationalteam: Boolean,
    // players: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Player'
    // }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    selections: [{
        type: Schema.Types.ObjectId,
        ref: 'Selection'
    }]
});

// Return model
module.exports = mongoose.model('Team', teamSchema);