import React, { Component } from 'react';
import { connect } from 'react-redux';  // subscription established
import * as actionCreators from '../../store/actions/index';

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
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onIncrement10Counter: () => dispatch(actionCreators.add(10)),
    onDecrement5Counter: () => dispatch(actionCreators.subtract(5)),

    // onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),

    // onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
