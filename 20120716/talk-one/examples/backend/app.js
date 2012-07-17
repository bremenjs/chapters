
/**
 * Module dependencies.
 */

var express          = require('express')
  , expressNamespace = require('express-namespace')
  , Solar            = require('solar')
  , http             = require('http');

var app = express()
  , database;

function crossdomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");﻿

    next();
}

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('jsonp callback', true );
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(crossdomain);
    app.use(app.router);
});

database = new Solar('db/calories.db');
database.on('loaded', function () {

    require('./api')(app, database);

    http.createServer(app).listen(app.get('port'), function() {
        console.log("huefte starts to grow while listening on port " + app.get('port'));
    });
});