import React, { useState, useRef, useContext, FocusEvent } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState<Boolean>(false);
  const todosCtx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null);

  // FormEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ! - will never be null
    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      todosCtx.addTodo(enteredText);
    }
  };

  const focusHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsEmpty(false);
  };

  const emptyInputNotification = <p>Todo text cannot be empty.</p>;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" onFocus={focusHandler} ref={todoTextInput} />
      <button>Add Todo</button>
      {isEmpty && emptyInputNotification}
    </form>
  );
};

export default NewTodo;
