// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var countrySchema = new Schema({
    name: String,
    code: String,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    teams : [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    competitions : [{
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    }]
});

// Return model
module.exports = mongoose.model('Country', countrySchema);