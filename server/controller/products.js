"use strict";
/**
 * Products Controller
 */
const Product = require("../db/model/products");
const ErrorCodes = require("./errorcodes");
const utils = require("./utils");
const Promise = global.Promise;

const list = params => {
  return new Promise((resolve, reject) => {
    Product.find({})
      .exec()
      .then(products => {
        if (products.length === 0) {
          reject(ErrorCodes.NO_PRODUCTS_FOUND);
        }

        resolve(products);
      })
      .catch(err => {
        reject(Object.assign({}, ErrorCodes.PRODUCT_API_ERROR, { trace: err }));
      });
  });
};

const create = params => {
  return new Promise((resolve, reject) => {
    let productDoc = new Product({ ...params });
    productDoc
      .save()
      .then(doc => {
        resolve(doc);
      })
      .catch(err => {
        if (err.code === 11000) {
          utils.throwError("DUPLICATE_PRODUCT", "sku", params.sku);
          reject();
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

const edit = params => {
  return new Promise((resolve, reject) => {
    Product.findOneAndUpdate({ sku: params.sku }, { ...params }, { new: true })
      .exec()
      .then(doc => {
        if (!doc) {
          utils.throwError("NO_PRODUCTS_FOUND", "sku", params.sku);
          reject();
        }
        resolve(doc);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const del = params => {
  return new Promise((resolve, reject) => {
    Product.findOneAndRemove({sku:params.sku})
    .exec()
    .then(doc => {
      if(doc)
        console.log('Deleted', doc);
      resolve();
    })
    .catch(err => {
      console.log(err);
      reject(err);
    })
  })
}
module.exports = { list, create, edit, del };
