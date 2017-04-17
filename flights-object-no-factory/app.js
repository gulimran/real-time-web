var flight = require('./flight');

var khilon = {
    number      : 786,
    origin      : 'KHI',
    destination : 'LON'
};

var kl = new Flight();
kl.fill(khilon);

kl.triggerDepart();

console.log(kl.getInformation());

var nyclon = {
    number      : 345,
    origin      : 'NYC',
    destination : 'LON'
};

var nl = new Flight();
nl.fill(nyclon);

console.log(nl.getInformation());

console.log(kl.getInformation());