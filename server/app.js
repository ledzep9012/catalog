/**
 * The main file that starts the web server
 */
'use strict';

/**
 * Standard dependencies
 */
var express = require('express');
var bodyparser = require('body-parser');
var mongo = require('./db/provider/mongo');
var cors = require('cors');

/**
 * Project dependencies
 */
var config = require('./config');

var app = express();
app.listen(config.PORT, onListen);

/*Middleware setup*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
//Enabling cors
app.use(cors());

var v1 = require('./routes/v1/api');
app.use('/v1', v1);


function onListen() {
    console.log('Server is listening at : ' + config.PORT);
}