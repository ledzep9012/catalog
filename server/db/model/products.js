/**
 * Product model
 */
/**
 * Standard Dependencies
*/
var mongoose = require('mongoose')

var schema = require('../schema/product');
var productSchema = new mongoose.Schema(schema);


module.exports = mongoose.model('products', productSchema);