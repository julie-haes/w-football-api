// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var palmaresSchema = new Schema({
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    clubs: [{
        year: Number,
        club: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    }],
    nationalteam: Boolean,
    caps: Number
});

// Return model
module.exports = mongoose.model('Palmares', palmaresSchema);