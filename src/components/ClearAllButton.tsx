import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./ClearAllButton.module.css";

const ClearAllButton = () => {
    const todosCtx = useContext(TodosContext);

    const clearClickHandler = () => {
        todosCtx.clearTodo()
    }

    return (
        <div className={classes.clear}>
            {todosCtx.items.length > 0 && <button onClick={clearClickHandler}>Clear All</button>}
        </div>
    );
};

export default ClearAllButton;