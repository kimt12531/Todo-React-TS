import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import EditModal from "./EditModal";
import { Constants } from "../utils/constants";

interface ITodoItem {
  id: string
  text: string
  onRemoveTodo: () => void
}

const TodoItem = (props: ITodoItem) => {
  const { id, text, onRemoveTodo } = props;
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOnEdit = () => {
    setShowEditModal(true);
  }

  const handleExitEditModal = () => {
    setShowEditModal(false);
  }

  return (
    <>
      {showEditModal && <EditModal todoId={id} handleOnClose={handleExitEditModal}/>}
      <li className={classes.item}>
        <p>{text}</p>
        <div>
          <button onClick={handleOnEdit}>{Constants.EDIT_BUTTON}</button>
          <button onClick={onRemoveTodo}>{Constants.DELETE_BUTTON}</button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
