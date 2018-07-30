import * as types from '../ActionTypes';

let initialState = {
  sortValue: 1,
  currentPage: 1,
  itemsPerPage: 7,
  isFetching: false,
  banking: {},
  error: '',
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      return { ...state, sortValue: -state.sortValue };
    case types.PAGINATION:
      return { ...state, currentPage: action.currentPage };
    case types.REQUEST_DATA_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.REQUEST_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    case types.REQUEST_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
