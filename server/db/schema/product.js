/**
 * The product Schema.
*/
'use strict';

module.exports = {
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    picture: {type: String },
    sku: {type: Number, index:{unique:true}},
}