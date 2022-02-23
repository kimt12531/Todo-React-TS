// import useSelector
// import useDispatch
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // Declare counter constant (managed by redux) using useSelector
  const counter = useSelector((state) => state.counter);

  // Declare dispatch using useDispatch
  const dispatch = useDispatch();

  // Create handler for increment
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  // Create handler for decrement
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* output counter */}
      <div className={classes.value}>{counter}</div>
      <div>
        {/* wire up onClick handlers for increment and dectement buttons */}
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
