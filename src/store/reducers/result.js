import * as actionTypes from '../actions';

const initialState = {
  results: [],
  meaningOfLife: 42
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {

      const showState = { ...state }
      console.log('[resultReducer] state.results', showState.results)

      return {
        ...state,
        results: state.results.concat({ id: new Date().getTime(), value: action.resultProp })
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
