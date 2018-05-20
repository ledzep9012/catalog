import productApi from "../services/productApi";

import {
  FETCH_PRODUCTS,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from "./types";

export const fetchProducts = () => dispatch => {
  productApi
    .fetchProducts()
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: items
      })
    )
    .catch(err => console.error(err));
};

export const editProduct = productData => dispatch => {
  console.log(productData);
  productApi
    .editProduct(productData)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: EDIT_PRODUCT,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

export const addProduct = newProduct => dispatch => {
  productApi
    .addProduct(newProduct)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: ADD_PRODUCT,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

export const deleteProduct = sku => dispatch => {
  productApi
    .deleteProduct(sku)
    .then(res => res.json())
    .then(data => ({
      dispatch: DELETE_PRODUCT,
      payload: data
    }))
    .catch(err => console.error(err));
};
