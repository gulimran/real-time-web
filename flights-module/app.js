var flight = require('./flight');

flight.setOrigin('Karachi');
flight.setDestination('London');
flight.setNumber(786);

console.log(flight.getInfo());