/**
 * Food API
 */
"use strict";

/**
 * Project dependencies
 */
var utilsController = require("../../controller/utils");
var ErrorCodes = require("../../controller/errorcodes");
var productsController = require("../../controller/products");

module.exports = {
  bind: function(router) {
    for (var op in api) {
      var routerExp =
        "router." +
        api[op].verb +
        "('" +
        api[op].resource +
        "'," +
        api[op].handler +
        ")";
      eval(routerExp);
    }
  },
  apilist: function() {
    return api;
  }
};

/* 
*    API proxy handling
*/
function proxyPromise(request, response, op) {
  var params = request.params;
  if (op.verb === "post") {
    params = request.body;
  }

  utilsController
    .validateParams(params, op.params)
    .then(function(paramsCheck) {
      if (paramsCheck.error) {
        response.send(paramsCheck.error);
        return;
      }

      var action =
        "productsController." +
        op.name +
        "(params)" +
        ".then(function(data){" +
        "var result = Object.assign({}, ErrorCodes.SUCCESS);" +
        "result.data = data;" +
        "response.send(result);" +
        "}).catch(function(err){" +
        "console.log(err);" +
        "if(ErrorCodes[err]) {" +
        'var ret = ErrorCodes.get(err.name);' +
        "if(err.data)   ret.data = err.data;" +
        "response.send(ret);" +
        "} else {" +
        "response.send(ErrorCodes.SOMETHING_WENT_WRONG);" +
        "}" +
        "})";

      eval(action);
    })
    .catch(function(err) {
      console.log(err);
      response.send(ErrorCodes.SOMETHING_WENT_WRONG);
    });
}

const api = {
  list: {
    name: "list",
    verb: "get",
    resource: "/products/",
    params: [],
    handler: function(request, response) {
      proxyPromise(request, response, api.list);
    }
  },

  create: {
    name: "create",
    verb: "post",
    resource: "/products/create",
    params: [
      {
        name: "sku",
        type: "number",
        required: true
      },
      {
        name: "name",
        type: "string",
        required: true
      },
      {
        name: "quantity",
        type: "number",
        required: true
      },
      {
        name: "price",
        type: "number",
        required: true
      },
      {
        name: "picture",
        type: "Buffer",
        required: false
      }
    ],
    handler: function(request, response) {
      proxyPromise(request, response, api.create);
    }
  },
  edit: {
    name: "edit",
    verb: "post",
    resource: "/products/edit",
    params: [
      {
        name: "sku",
        type: "number",
        required: true
      },
      {
        name: "name",
        type: "string",
        required: true
      },
      {
        name: "quantity",
        type: "number",
        required: true
      },
      {
        name: "price",
        type: "number",
        required: true
      },
      {
        name: "picture",
        type: "Buffer",
        required: false
      }
    ],
    handler: function(request, response) {
      proxyPromise(request, response, api.edit);
    }
  },
  del: {
    name: "del",
    verb: "delete",
    resource: "/products/:sku",
    params: [
      {
        name: "sku",
        type: "string",
        required: true
      }
    ],
    handler: function(request, response) {
      proxyPromise(request, response, api.del);
    }
  }
};
