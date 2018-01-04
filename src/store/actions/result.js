import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }

}

export const storeResult = (res) => {
  return function (dispatch, getState) {
    setTimeout(() => {
      // example of logic in the dispatch action; prefer to do logic in reducers and stay consistent with whatever you do if not;
      // const oldCounter = getState().ctr.counter;
      // console.log('oldCounter: ', oldCounter)
      dispatch(saveResult(res))
    }, 2000);
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  }
} 