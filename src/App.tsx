import ClearAllButton from "./components/ClearAllButton";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      <ClearAllButton />
    </TodosContextProvider>
  );
}

export default App;
