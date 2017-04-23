module.exports = function (flights) {

    var express      = require('express');
    var path         = require('path');
    var favicon      = require('serve-favicon');
    var logger       = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser   = require('body-parser');
    var index        = require('./routes/index')(flights);

    var app          = express();

    app.use(logger('dev'));
    app.set('view engine', 'jade');
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(function (req, res, next) {
        res.set('X-Powered-By', 'Flight tracker');
        next();
    });

    app.use('/', index);
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    return app;
}

