import React from "react";
import classes from "./TodoItem.module.css";

interface TodoItemInterface {
  key: string
  text: string
  onRemoveTodo: () => void
}

const TodoItem = (props: TodoItemInterface) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
