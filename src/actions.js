import * as types from './ActionTypes';

export const sortItems = () => {
  return {
    type: types.SORT,
  };
};
export const pagination = currentPage => {
  return {
    currentPage,
    type: types.PAGINATION,
  };
};
export const getData = () => {
  return dispatch => {
    return fetch('http://localhost:8081/getData')
      .then(res => res.json())
      .then(function(response) {
        console.log(response);
        return {
          type: types.GET_DATA,
          myJson: response,
        };
      })
      .catch(function(myJson) {
        console.log(myJson);
        return {
          myJson,
          type: types.GET_DATA,
        };
      });
  };
};
