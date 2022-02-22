// 1. Import redux
const redux = require("redux");

// 3. Create reducer function
// Returns object with any properties we want
// Give state a default value it could start at
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// 2. Create a store
const store = redux.createStore(counterReducer);

// 4. Create subscriber function to execute whenever state changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 5. Assign subscribe method on store
store.subscribe(counterSubscriber);

// 6. Dispatch an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });