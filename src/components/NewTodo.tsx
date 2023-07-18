import React, { useState, useRef, useContext, FocusEvent } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
import { Constants } from "../utils/constants";

const NewTodo = () => {
  const [isEmpty, setIsEmpty] = useState<Boolean>(false);
  const todosCtx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

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

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">{Constants.TODO_TEXT_LABEL}</label>
      <input type="text" id="text" onFocus={focusHandler} ref={todoTextInput} />
      <button>{Constants.ADD_TODO_BUTTON}</button>
      {isEmpty && <p>{Constants.EMPTY_TODO_TEXT}</p>}
    </form>
  );
};

export default NewTodo;
