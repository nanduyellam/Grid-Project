import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from '../TodoRedux/action';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const changeBackground = (e, text) => {
    e.target.style.borderStyle = text;
    // e.target.style.backgroundColor = "grey";
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={styled}
    >
      <h6>
        {/* {id} : {text} */}
        {text}

      </h6>
      <div >
        <span>
          <i
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={hanldeToggle}
          />
        </span>
        <span>
          <i
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={handleDelete}
          />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
