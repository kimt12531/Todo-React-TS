import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// FC stands for Functional Component
// has children prop
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
