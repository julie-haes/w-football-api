// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var selectionSchema = new Schema({
    description: String,
    year: String,
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    players : [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    currenct_selection: Boolean,
    coach: String
});

// Return model
module.exports = mongoose.model('Selection', selectionSchema);