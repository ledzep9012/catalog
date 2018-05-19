/**
 * The product Schema.
*/
'use strict';

module.exports = {
    name: { type: String },
    price: { type: String },
    quantity: { type: String },
    picture: {data: Buffer, contentType: String },
    sku: {type: Number, index:{unique:true}},
}