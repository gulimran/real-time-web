var express = require('express');
var router = express.Router();
var flight = require('../flight');
var flights = require('../data');

for (var number in flights) {
    flight[number] = flight(flights[number]);
}

router.get('/flight/:number', function(req, res, next) {
    var number = req.param('number');

    if (typeof flights[number] === 'undefined') {
        res.status(404).json({status: 'error'});
    } else {
        res.json(flight[number].getInformation());
    }
});

router.put('/flight/:number/arrived', function(req, res, next) {
    var number = req.param('number');

    if (typeof flights[number] === 'undefined') {
        res.status(404).json({status: 'error'});
    } else {
        flight[number].triggerArrive();
        res.json({status: 'arrived'});
    }
});

router.get('/list', function(req, res, next) {
    res.render('list', {title: "All Flights", flights: flights});
});

module.exports = router;
