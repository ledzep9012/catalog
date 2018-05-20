import productApi from "../services/productApi";

import {FETCH_PRODUCTS, EDIT_PRODUCT} from './types';

export const fetchProducts = () => dispatch => {
  productApi
    .fetchProducts()
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: items.data
      })
    );
};

export const editProduct = (productData) => (dispatch) => {
    console.log(productData)
    productApi.editProduct(productData).then(res => res.json())
    .then(data => {
        dispatch({
            type:EDIT_PRODUCT,
            payload: data
        })
    })
}