var flight = require('./flight');

var khilon = {
    number      : 786,
    origin      : 'KHI',
    destination : 'LON'
};

var kl = flight(khilon);

kl.triggerDepart();

console.log(kl.getInformation());

var nyclon = {
    number      : 345,
    origin      : 'NYC',
    destination : 'LON'
};

var nl = flight(nyclon);

console.log(nl.getInformation());

console.log(kl.getInformation());