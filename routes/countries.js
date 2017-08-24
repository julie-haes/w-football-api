// Dependencies
var express = require('express');
var router = express.Router();
var CountryController = require('../controllers/countries');

// Routes
router.route('/')
    .get(CountryController.index)
    .post(CountryController.createCountry);

router.route('/:countryId')
    .get(CountryController.getCountry)
    .put(CountryController.replaceCountry)
    .patch(CountryController.updateCountry)
    .delete(CountryController.deleteCountry);

// Return router
module.exports = router;