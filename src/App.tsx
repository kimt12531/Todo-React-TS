import { useState } from "react";
import ClearAll from "./components/ClearAll";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import TodosContextProvider from "./store/todos-context";

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      <ClearAll />
    </TodosContextProvider>
  );
}

export default App;
