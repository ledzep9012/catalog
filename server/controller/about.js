/**
 * About Controller
 */
'use strict';

/**
 * Project dependencies
*/
var fs = require('fs');
var path = require('path')

module.exports = {

    fetchDetails: function(params, onComplete){

       var filePath = path.join(__dirname,'../package.json')
       console.log(filePath);

        fs.readFile(filePath,'utf-8',function(error, text){
            var result = text || error;
            onComplete(result);
        });        
    }


}