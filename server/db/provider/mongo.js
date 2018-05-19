/**
 * Handles db connection
 */
/**
 * Standard dependencies
 * mongoose's default promise library is deprecated, plug in your own promise library instead
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/**
 * Project dependencies
*/
var config = require('../../config');
/*Mongodb configuration*/
var url = 'mongodb://'+
            config.db.username +':'+
            config.db.password +'@'+
            config.db.host     +':'+
            config.db.port     +'/'+
            config.db.name;
            
var options = {useMongoClient : true};

var onError = function(error){
    console.log(error);
}

var onComplete = function(error){
    if(error){
        console.log(error);
    }
    console.log('Connection made: '+(error || url));
}

var onOpen = function(error){
    if(error){
        console.log(error);
    }    
}

console.log('Connecting to mongo ...', url);
mongoose.set('debug', process.env.dev);

mongoose.connect(url, options, onComplete);
mongoose.connection.on('error', onError);
mongoose.connection.on('open', onOpen);

module.exports = mongoose;