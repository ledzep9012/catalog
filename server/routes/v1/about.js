/**
 * DEVICE API
*/
'use strict';

/**
 * Project dependencies
 */
var utilsController = require('../../controller/utils');
var aboutController = require('../../controller/about');
var errcodeController = require('../../controller/errorcodes');


module.exports = {

    bind: function (router) {

        for (var op in api) {
           var routerExp  = 'router.' + api[op].verb + '(\'' + api[op].resource + '\',' + api[op].handler + ')';
           eval(routerExp);
        }        
    },
    apilist: function(){
        return api;
    }

}

/*API proxy handling*/
function proxy(request, response, op) {
    var params = (op.verb === 'post') ? request.params : request.body;
    var validity = utilsController.checkParams(params, op.params);

    if(!validity[0]){
        response.send(errcodeController.MISSING_PARAMS);
        return;
    }

    function onComplete(result){
        response.send(result);
        return;
    }

    var action = 'aboutController.'+op.name+'(params, onComplete)';
    eval(action);

}

const api = {
    details: {
        name: 'fetchDetails',
        verb: 'get',
        resource: '/about/details',
        params: [],
        handler: function (request, response) {
            proxy(request, response, api.details);
        }
    }
}