import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      const showState = { ...state }
      console.log('[resultReducer] state.results', showState.results)
      return {
        ...state,
        results: state.results.concat({ id: new Date().getTime(), value: action.result })
      }
    }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state;
  }
}

export default resultReducer; 
