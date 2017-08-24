// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var playerSchema = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: String,
    avatar: String,
    nationality : {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    },
    palmares : {
        type: Schema.Types.ObjectId,
        ref: 'Palmares'
    },
    selections : [{
        type: Schema.Types.ObjectId,
        ref: 'Selection'
    }]
});

// Return model
module.exports = mongoose.model('Player', playerSchema);