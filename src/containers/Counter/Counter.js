import React, { Component } from 'react';
import { connect } from 'react-redux';  // subscription established
import * as actionTypes from '../../store/actions';

import './Counter.css'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" clicked={this.props.onIncrement10Counter} />
        <CounterControl label="Subtract 5" clicked={this.props.onDecrement5Counter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map(strResult => {
            return <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            ><button className="result">Number:___{strResult.value + "___Date As ID:" + strResult.id}</button></li>
          })}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onIncrement10Counter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    onDecrement5Counter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),

    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, resultProp: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
