import { FETCH_PRODUCTS } from "../actions/types";

const initialState = {
  items: [],
  product: {},
  isFetching: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
      break;
    default:
      return state;
  }
}
