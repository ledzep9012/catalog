import {
  FETCH_PRODUCTS,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

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
  isFetching: true,
  isEditing: true,
  isAdding: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      let err = errChecker(action.payload);
      return {
        ...state,
        items: err ? null : action.payload.data,
        isFetching: false,
        error: err
      };
    case EDIT_PRODUCT:
      err = errChecker(action.payload);
      return {
        ...state,
        item: err ? null : action.payload.data,
        error: err,
        isEditing: false
      };
    case ADD_PRODUCT:
      err = errChecker(action.payload);
      return {
        ...state,
        newItem: err ? null : action.payload.data,
        error: err,
        isAdding: false,
        isFetching: err ? false : true,
      };
    case DELETE_PRODUCT:
      err = errChecker(action.payload);
      console.log('here', action);
      return {
        ...state,
        error: err,
        isFetching: err ? false : true,
      };
    default:
      return state;
  }
}
