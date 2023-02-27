import React from 'react';

// context contents
const TodoList = React.createContext();
const TodoListDispatch = React.createContext();
const TodoListActions = React.createContext();

export function useTodoList() {
    return React.useContext(TodoList)
}
export function useTodoListDispatch() {
    return React.useContext(TodoListDispatch)
}
export function useTodoListActions() {
    return React.useContext(TodoListActions)
}

// context contents

// reducer functions
export const ACTIONS = {
    ADD_TODO: "add_todo",
    DELETE_TODO: "delete_todo",
    TOGGLE_TODO: "toggle_todo"
}


function reduceReducer(todo, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todo, newTodo(action.payload)]
        case ACTIONS.DELETE_TODO:
            return todo.filter(todos => todos.id !== action.payload)
        case ACTIONS.TOGGLE_TODO:
            return todo.map((todos) => {
                if (todos.id !== action.payload)
                    return todos
                else
                    return { ...todos, isComplete: !todos.isComplete }
            })
        // return todo.filter(todos => todos.id !== action.payload)
        default:
            return todo
    }
}


function newTodo(payload) {
    return ({ id: Date.now(), name: payload, isComplete: false })
}
// reducer functions


export const TodoContext = ({ children }) => {

    const [todo, dispatch] = React.useReducer(reduceReducer, [])

    return (
        <TodoList.Provider value={todo}>
            <TodoListDispatch.Provider value={dispatch}>
                <TodoListActions.Provider value={ACTIONS}>
                    {children}
                </TodoListActions.Provider>
            </TodoListDispatch.Provider>
        </TodoList.Provider>
    );
}

