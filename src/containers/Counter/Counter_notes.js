import React, { Component } from 'react';
import { connect } from 'react-redux';  // subscription established

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => { return { counter: prevState.counter + 1 } })
        break;
      case 'dec':
        this.setState((prevState) => { return { counter: prevState.counter - 1 } })
        break;
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onIncrement5Counter} />
        <CounterControl label="Subtract 5" clicked={this.props.onDecrement5Counter} />
      </div>
    );
  }
}



// instructions about how the state (managed by Redux) should be mapped to props that you can use in this container 
// we get the 'state', which we can use in our container
// state is mapped to props, ...which we use in our container
const mapStateToProps = state => {
  return {
    // returns a map of prop names and slices of the state stored in Redux
    ctr: state.counter
    // give me the value of state.counter, pass it as a prop named 'ctr', so I can use it in this component
    // map the state of state.counter, to a prop named 'ctr', please

  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onIncrement5Counter: () => dispatch({ type: 'ADD_5' }),
    onDecrement5Counter: () => dispatch({ type: 'SUBTRACT_5' })

  }
}

// we get the 'dispatch' function, which we can use in our container
// dispatch actions are mapped to props, ...which we use in our container
// prop names w/references to functions

// so 'onIncrementCounter' is a prop to be used in our container, to fire this anonymous function 'dispatch', with an action type of 'INCREMENT'




export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// using slices of state and actions
// export default connect(null, mapDispatchToProps)(Counter);
// using actions, but no state, pass 'null' as 1st argument
// export default connect(mapStateToProps)(Counter);
        // using state alone, just leave out the 2nd argument


// connect gives us the Counter container, with a prop named 'ctr'


// higher order function
// used on the export
// not wrapping the component

// connect() is a function... 
  // which returns a function...
    // which takes a component as input

// connect() is not a higher order component
// it is a function which returns a higher order component
// we can use it to pass some configuration for this given container

// 2 pieces of info:
  // 1. slices of state we want to get (in this container)
  // 2. relevant actions I want to dispatch (in this container) 