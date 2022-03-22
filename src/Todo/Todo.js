/* import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
const Todo = () =>{
    const[task, setTask]= useState('')
    const[todos, setTodos]= useState([])
    const [editingText, setEditingText] = useState("");
    const [todoedit, setTodoedit] = useState(null);
   
/*    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
 */
  

  /*  const submitHandler= e =>{
       e.preventDefault();
       const newTodos = [...todos, task];
      setTodos(newTodos) // we are submited the data into setTodos so, you have to printh these into elements.
      setTask("");// after enter the text we want text shouled be empty.
   }
   const deleteHandler = (indexValue)=>{
    const newTodos=todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos)
   }
  /*  const updateHandler = (id) =>{
    const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
         
        }
        return todo;
      });
      setTodos(updatedTodos);
  
    } */
    /* const submitedit=(id)=>{
        const updatetodos= [...todos].map((todo)=>{
            if(todo.id== id){
                todo.text= editingText;
            }
            return todo  
        })
         setTodos(updatedTodos);
    setTodoedit(null);
    }
return(
    <div>
        <center>
            <div className="card">
                <h4>Todo Management Application</h4>
                <form onSubmit={submitHandler}>
                    <input type="text" name="task" value={task} onChange={(e)=>setTask(e.target.value)} /> &nbsp;&nbsp;
                    <input type="submit" value="Add"/>

                </form>
                {todos.map((todo)=>(
                 <div key={todo.id}>
                 <div>
                 {todo.id == todoedit ?(
                 <input type="text" onChange={(e)=>setEditingText(e.target.value)}/>
                 ):: (
              <div>{todo.text}</div>
            )}
            </div>
                 <div>
                 {todo.id == todoedit ?( 
                 <button onClick={()=>submitedit(todo.id)}>Submit Edit</button>):
                 (<button onClick={()=>setTodoedit(todo.id)}>Edit</button> )}
                 <button onClick={(e)=>deleteHandler(todo.id) }>Delete</button>
                 </div>
                 </div>
                )
                    )}
                


            </div>
        </center>
    </div>
)
}
export default Todo   */

import React from "react";
const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
