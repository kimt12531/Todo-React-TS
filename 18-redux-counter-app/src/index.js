import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// import Provider
import { Provider } from "react-redux";
// import store
import store from "./store/index";

// Wrap App with Provider
// Add store prop (value is our redux store that we imported)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
