import { combineReducers } from "redux";

import productsReducer from "./productReducer";

export default combineReducers({
    products: productsReducer
})

// const products = (
//   state = {
//     isFetching: false,
//     didInvalidate: false,
//     products: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case INVALIDATE_FETCH:
//       return {
//         ...state,
//         didInvalidate: true
//       };
//     case FETCH_PRODUCTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       };
//     case RECEIVE_PRODUCTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         catalog: action.products,
//         lastUpdated: action.receivedAt
//       };
//     default:
//       return state;
//   }
// };

// const allProducts = (state = {}, action) => {
//   switch (action.type) {
//     case INVALIDATE_FETCH:
//     case RECEIVE_PRODUCTS:
//     case FETCH_PRODUCTS:
//       return {
//         ...state,
//         catalog: products(state[action.products], action)
//       };
//     default:
//       return state;
//   }
// };

// const productReducer = combineReducers({
//   allProducts,
//   selectedProduct
// });

// export default productReducer;
