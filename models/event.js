// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var eventSchema = new Schema({
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    main_player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    second_player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },    
    type: String,
    minute: Number
});

// Return model
module.exports = mongoose.model('Event', eventSchema);