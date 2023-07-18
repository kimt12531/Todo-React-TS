import React, { useContext, useRef, useState, FocusEvent } from "react";
import { TodosContext } from "../store/todos-context";
import { Constants } from "../utils/constants";
import classes from "./EditTodo.module.css";

interface IEditTodo {
    todoId: string,
    handleOnClose: () => void
}

const EditTodo = (props: IEditTodo) => {
    const editTodoInput = useRef<HTMLInputElement>(null);
    const [isEmpty, setIsEmpty] = useState<Boolean>(false);

    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = editTodoInput.current!.value;

        if (enteredText.trim().length === 0) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
            todosCtx.editTodo(props.todoId, enteredText);
            props.handleOnClose()
        }
    };

    const focusHandler = (event: FocusEvent<HTMLInputElement>) => {
        setIsEmpty(false);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text">{Constants.NEW_TODO_TEXT_LABEL}</label>
        <input type="text" id="text" onFocus={focusHandler} ref={editTodoInput} />
        <button>{Constants.EDIT_TODO_BUTTON}</button>
        {isEmpty && <p>{Constants.EMPTY_TODO_TEXT}</p>}
    </form>
}

export default EditTodo;