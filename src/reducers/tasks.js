import * as types from '../ActionTypes';

let initialState = {
  sortValue: 1,
  currentPage: 1,
  itemsPerPage: 7,
  data: [],
};
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      return { ...state, sortValue: -state.sortValue };
    case types.PAGINATION:
      return { ...state, currentPage: action.currentPage };
    case types.GET_DATA:
      console.log('xx', action.myJson);
      return { ...state, data: action.myJson };
    default:
      return state;
  }
};
export default myReducer;
