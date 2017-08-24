// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dev-project');

// Express
var app = express();
app.use(bodyParser({ extended: true }));
app.use(bodyParser.json());

// Routes
var teams = require('./routes/teams.js');
var countries = require('./routes/countries.js');
var players = require('./routes/players.js');
var competitions = require('./routes/competitions.js');

app.use('/teams', teams);
app.use('/countries', countries);
app.use('/players', players);
app.use('/competitions', competitions);

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
})

// Error handler
app.use((error, req, res, next) => {
    var warning = app.get('env') === 'development' ? error : {};
    var status = error.status || 500;

    // Response to client
    res.status(status).json({
        error: {
            message: warning.message
        }
    });

    // Response to ourselves
    console.error(error);
})

// Start server
app.listen(3000);
console.log('API is running on port 3000');