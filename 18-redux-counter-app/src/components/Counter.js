// import useSelector
import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // Declare counter constant (managed by redux) using useSelector
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* output counter */}
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
