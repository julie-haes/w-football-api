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
    tournaments: [{
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    }],
    nationalteam: Boolean,
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