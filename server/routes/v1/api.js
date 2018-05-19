/*API version 1*/

/**
 * Standard Dependencies
 */
var express = require('express');
var router = express.Router();

module.exports = router;

/**
 * Project dependencies
 */
var about = require('./about');
var ErrorCode = require('../../controller/errorcodes');
var products = require('./products');
/**
 * About API binding
 */
about.bind(router);
products.bind(router);


/**
 * List the Apis: Used In the Project
 */
router.get('/api', function (request, response) {
    var result = {};
    addApiInfo(about.apilist(), result);
    addApiInfo(products.apilist(), result);
    response.send(result);

});

function addApiInfo(apiList, result) {
    for (var key in apiList) {
        var apiDetails = apiList[key];
        result[key] = {
            verb: apiDetails.verb,
            endpoint: apiDetails.resource,
            parameters: apiDetails.params
        }
    }
}