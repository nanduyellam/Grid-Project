import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../TodoRedux/action";

const TodoInput = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <i/>
            </div>
          </div>
          <input
            type="text"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
        >
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
