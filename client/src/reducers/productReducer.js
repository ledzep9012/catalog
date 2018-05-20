import { FETCH_PRODUCTS, EDIT_PRODUCT } from "../actions/types";

const errChecker = response => {
  if (response.errorCode !== 0) {
    const { errorCode, errorStatus } = response;
    return { errorCode, errorStatus };
  }
  return null;
};

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
    case EDIT_PRODUCT:
      const err = errChecker(action.payload);
      return {
        ...state,
        item: err ? null : action.payload.data,
        error: err,
        isEditing: false
      };
    default:
      return state;
  }
}
