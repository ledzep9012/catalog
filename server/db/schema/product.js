/**
 * The product Schema.
*/
'use strict';

module.exports = {
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    picture: {data: Buffer, contentType: String },
    sku: {type: Number, index:{unique:true}},
}