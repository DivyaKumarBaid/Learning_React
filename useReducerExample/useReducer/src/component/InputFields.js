import React from 'react';
import { useTodoList, useTodoListDispatch, useTodoListActions } from './Todo';

const InputFields = () => {
    // custom context reducers
    const todolist = useTodoList();
    const todolistdispatch = useTodoListDispatch();
    const todolistactions = useTodoListActions();
    // custom context reducers

    // state management
    const [name,setName] = React.useState("")
    // state management

    // form function
    function handleChange(value) { 
        setName(value)
    }
    // form function


    // reducer functions
    function addTodo() {
        todolistdispatch({ type: todolistactions.ADD_TODO,payload:name});
        setName("");
      }
      function delTodo(id) {
        todolistdispatch({ type: todolistactions.DELETE_TODO,payload:id });
      }
      function toggleTodo(id) {
        todolistdispatch({ type: todolistactions.TOGGLE_TODO,payload:id });
      }
    // reducer functions

    return (
        <>
        <div>
          <input type="text" value={name} onChange={e => handleChange(e.target.value)} />
          <button onClick={addTodo}>ADD</button>
        </div>
        <div>
          {todolist.map((todo) => {
            return (
                <div>
                <h1 style={{color:todo.isComplete ? "green":"red"}}>{todo.name}</h1>
                  <button onClick={()=>toggleTodo(todo.id)}>Toggle</button>
                  <button onClick={()=>delTodo(todo.id)}>Delete</button>
                </div>
              )
            })
          }
        </div>
      </>
    );
}

export default InputFields;
