import React from "react";
import EditTodo from "./EditTodo";
import classes from "./EditModal.module.css";

interface IEditModal {
    todoId: string,
    handleOnClose: () => void
}

const EditModal = (props: IEditModal) => {
    const { todoId, handleOnClose } = props

    return (
        <div>
            <div className={classes.backdrop} onClick={handleOnClose}/>
            <section className={classes.modal}>
                <EditTodo todoId={todoId} handleOnClose={handleOnClose}/>
            </section>
        </div>
    )
}

export default EditModal;