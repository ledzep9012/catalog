import productApi from "../services/productApi";

import {FETCH_PRODUCTS} from './types';

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