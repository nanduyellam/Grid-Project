import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../TodoRedux/action";
import todos from "../TodoRedux/reducer";
import TodoItem from './TodoItem'
const TodoList = () => {
  const { list } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul>
        <h3>Kelvin Todo list</h3>
        {list.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        type="button"
        onClick={handleClearList}
      >
        clear list
      </button>
    </div>
  );
};

export default TodoList;
