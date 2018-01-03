const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer: combine the actions that I have dispatched
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store: hold state, return updated state based on dispatched Actions in Reducers
const store = createStore(rootReducer);
console.log('1: store initialization', store.getState())

// Subscription: let me know everytime something changes in the store; using JS code in body
store.subscribe(() => {
  console.log('2: subscription', store.getState());
});


// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log('3: after dispatching INC and ADD ', store.getState())
