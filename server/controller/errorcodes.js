/**
 * ERROR CODES
 */
module.exports = {
  get: function(key) {
    return Object.assign({}, this[key]);
  },

  getString: function(key) {
    return JSON.stringify(this[key]);
  },

  SUCCESS: Object.freeze({
    errorCode: 0,
    errorStatus: "success"
  }),

  /*General Error Codes: 1xxx*/
  MISSING_PARAMS: Object.freeze({
    errorCode: 1000,
    errorStatus: "One or more parameters missing"
  }),

  SOMETHING_WENT_WRONG: Object.freeze({
    errorCode: 1001,
    errorStatus: "Something went wrong"
  }),

  /* Product Api Error Codes */
  NO_PRODUCTS_FOUND: Object.freeze({
    errorCode: 2001,
    errorStatus: "No Products in Stock Currently"
  }),

  PRODUCT_API_ERROR: Object.freeze({
    errorCode: 2002,
    errorStatus: "Some Error occured in querying DB"
  }),

  DUPLICATE_PRODUCT: Object.freeze({
      errorCode:2003,
      errorStatus: 'Duplicate Product, Please check SKU'
  })
};
