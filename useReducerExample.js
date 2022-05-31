import React from 'react';

export const ACTIONS={ 
  ADD_TODO:"add_todo",
  DELETE_TODO: "delete_todo",
  TOGGLE_TODO: "toggle_todo"
}

function reduceReducer(todo, action) {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todo,newTodo(action.payload)]
    case ACTIONS.DELETE_TODO:
      return todo.filter(todos => todos.id !== action.payload)
    case ACTIONS.TOGGLE_TODO:
      return todo.map((todos) => {
        if (todos.id !== action.payload)
          return todos
        else
          return {...todos, isComplete: !todos.isComplete}
      })
      // return todo.filter(todos => todos.id !== action.payload)
    default:
    return todo
  }
}

function newTodo(payload) { 
  return ({id:Date.now(),name:payload,isComplete:false})
}


const App = () => {

  // const [statename,dispatchfunction] = React.useReducer(Actionfunction,initial value)

  const [todo, dispatch] = React.useReducer(reduceReducer, [])
  const [name, setName] = React.useState("")
  console.log(todo)
  
  function handleChange(value) { 
    setName(value)
  }

  function addTodo() {
    dispatch({ type: ACTIONS.ADD_TODO,payload:name});
    setName("");
  }
  function delTodo(id) {
    dispatch({ type: ACTIONS.DELETE_TODO,payload:id });
  }
  function toggleTodo(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO,payload:id });
  }


  return (
    <>
      <div>
        <input type="text" value={name} onChange={e => handleChange(e.target.value)} />
        <button onClick={addTodo}>ADD</button>
      </div>
      <div>
        {todo.map((todo) => {
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

export default App;
