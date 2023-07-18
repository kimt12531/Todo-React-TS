import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./ClearAll.module.css";
import { Constants } from "../utils/constants";

const ClearAll = () => {
    const todosCtx = useContext(TodosContext);

    const clearClickHandler = () => {
        todosCtx.clearTodo()
    }

    return (
        <div className={classes.clear}>
            {todosCtx.items.length > 0 && <button onClick={clearClickHandler}>{Constants.CLEAR_ALL_BUTTON}</button>}
        </div>
    );
};

export default ClearAll;