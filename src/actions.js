import * as types from './ActionTypes';
import fetch from 'cross-fetch';

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

export const fetchData = () => async dispatch => {
  try {
    await dispatch({ type: types.REQUEST_DATA_BEGIN });
    const result = await fetch('http://localhost:8081');
    return dispatch({
      type: types.REQUEST_DATA_SUCCESS,
      payload: await result.json(),
    });
  } catch (error) {
    return dispatch({
      type: types.REQUEST_DATA_FAILURE,
      payload: 'Loi roi day',
    });
  }
};

// export const getData = () => {
//   return disptatch => {
//     return fech('http://localhost:8081/getData')
//       .then(res => res.json())
//       .then(function(response) {
//         console.log(response);
//         return {
//           type: types.GET_DATA,
//           myJson: response,
//         };
//       })
//       .catch(function(myJson) {
//         console.log(myJson);
//         return {
//           myJson,
//           type: types.GET_DATA,
//         };
//       });
//   };
// };
