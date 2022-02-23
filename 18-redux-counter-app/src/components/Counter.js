import { counterActions } from "../store/counter";

// import useSelector
// import useDispatch
import { useSelector, useDispatch } from "react-redux";
// import { INCREMENT } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  // Declare counter constant (managed by redux) using useSelector
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // Declare dispatch using useDispatch
  const dispatch = useDispatch();

  // Create handler for increment
  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 10 });
    dispatch(counterActions.increase({amount: 10}));
  };

  // Create handler for decrement
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* output counter */}
      {show && <div className={classes.value}>{counter}</div>}{" "}
      <div>
        {/* wire up onClick handlers for increment and dectement buttons */}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//--- CLASS-BASED APPROACH---

// import { Component } from "react";
// import {connect} from 'react-redux'

// import classes from "./Counter.module.css";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {/* output counter */}
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         {/* wire up onClick handlers for increment and dectement buttons */}
//         <button onClick={this.incrementHandler.bind(this)}>increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
