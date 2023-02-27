# React Hooks: Explained with JSX Examples

React Hooks were **introduced with the release of React version 16 whic**h makes it easier to share stateful logic between components. They are a way to write components that can have side effects such as data fetching, setting up a subscription, etc, and still be fully declarative. This reduces the amount of code that is needed to manage state in React components, making them easier to read and maintain. So in simpler terms, React Hooks are tools that help the developer of the code to use easy to read React functional components without losing the state of the art of React classes.

## What are React Hooks?

React Hooks are functions that allow you to use state and other React features without writing a class. Hooks let you “hook into” React state and lifecycle features from function components.

Hooks allow you to write components in a more concise way, without having to use classes. This makes it easier to read and maintain your code, as well as making it easier to reuse code across different components.

## Examples of React Hooks

React hooks are inbuild in React module and can be used either as `React.HOOK_NAME` or we can just import it as `import {HOOK_NAME} from ‘react’;`

There are multiple React Hooks such as useState, useEffect, useReducer, useMemo, useRef, useContext, useCallback etc.

Let's look at some examples of React Hooks and how they can be used : 

## useState

The useState Hook allows you to store and update the state in a function component. To use it, you provide an initial state, and then use the setState function to update the state when needed.

For example, if we wanted to set a greeting message in our component, we could do something like this:

```jsx
const [greeting, setGreeting] = React.useState('Hello!');
```

This sets an initial greeting of “Hello!”, and then we can use `setGreeting` to update the greeting message when needed.

The useState returns two values - the state and a function through which we can change the state.

Here we have greeting as state and a function setGreeting to change the state.

A state can be imagined as a fixed constant value that can only be changed by a particular function.

Function that changes the state receives the old state as params by default and can be used to update the new state logically.

For example to toggle a switch

```jsx
const [switch,setSwitch] = React.useState(false);
const toggle = () => setSwitch( preValue => !preValue);
```

Here preValue is the preValue that state had.

More complex example can be a state counter which stores the initial value of the counter and with the click of a button changes the value → either increment it or decrement it.

```jsx
import {useState} from ‘react’
export default App(){

    const [count,setCount] = useState(0)

	  function changeState(value){
			setCount(prev => prev+value)
		}

    return(
        <div className="counter">
          <button className="counter--minus" onClick = {()=>changeState(-1)}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
          <button className="counter--plus" onClick = {()=>changeState(1)}>+</button>
        </div>
    )

  }
```

`useState` is a way to access the same features as `this.state` provides in a class. Normally, variables are lost when a function ends, but React preserves state variables.

## useEffect

The useEffect Hook allows you to handle and perform side effects in function components, such as making a request to a server or setting up a subscription.

The syntax of a useEffect hook is 

```jsx
React.useEffect(
	()=>{}, //function
	[] // a dependency array
)
```

the useEffect Hook receives a function and a dependency array as input.

The function is called either when the component is loaded first time or any element in the dependency array changes.

For example, if we wanted to make an API request when the component is mounted, we could do something like this:

```
useEffect(() => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data));
}, []);

```

This will make the API request when the component is mounted, and set the data returned to the `data` state.

### createContext and useContext

When creating a small app with fewer components, prop drilling may sound like a good idea. However, when dealing with an app with multiple components that rely on the state of other components, the complexity of prop drilling increases, resulting in unnecessary props being passed through components whose children need them.

Prop drilling is a method in which components pass values to their child components. This creates a tree-like structure in React, where the parent component acts as the root node and the children as the leaf nodes.

The `useContext` Hook enables you to access the React Context from a function component. It provides a means of passing data through the component tree without having to manually pass props at every level. `createContext` creates a Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the `Provider`.

For instance, if we wanted to access the theme and toggle it throughout the React app, we would need to create a parent component or you might as well say a custom hook.

```jsx
import {createContext, useContext} from 'react'

const ThemeToggle = React.createContext();

export const useTheme = () =>{
	return React.useContext(ThemeToggle);
}

export const providerComponent = ({children}) => {

	const [Theme,setTheme] = React.useState(false);
	const toggletheme = () => {setTheme(prevTheme=>!prevTheme)}
	
	return (
	  <ThemeToggle.Provider value={{Theme,toggleTheme}}>
	    <Component>
	  </ThemeToggle.Provider>
	);
}

```

```jsx
import {providerComponent} from './contextApi';

export App = () => {
	
	return (
		<providerComponent>
			<OtherComponent />
		</providerComponent>
	)
}

const OtherComponent = () => {
		const themeObj = useTheme(); //this has the Theme and toggleTheme	
		console.log(themeObj);
		return(
			<div onClick(()=>themeObj.toggleTheme())>Hello World</div>
		)
}
```

Don't be scared of the code! We'll show you step-by-step how to use `createContext` and `useContext` properly.

To use global states in React, here's what you need to do:

- Use the `createContext` hook to make a context, here it's `ThemeToggle`.
- Export the context you made with `useContext` so you don't need to decode it anywhere else. Or you can just export `ThemeToggle` and decode it everywhere else.
- Make a wrapping component that uses `ThemeToggle` context and also provides some value to its provider. The provider is a must-have in a React Context and it's called `ContextName.Provider`.
- This wrapping component should include any state you need in your React app, and you need to put it in the `value` attribute of the `Context.Provider`.
- Think of this wrapping component like a `<p>` tag from HTML, and you need to have stuff inside it, like you have text in a `<p>` tag. So this component gets children as props and needs to return them as children of the `Context.Provider` wrapper.
- Now that you've created and exported your context, you can import it and use it in your React app.
- Since you've passed all the components of your root app through the context wrapper, you can use the exported `useContext` function here, `useTheme`, and use the value it returns.

## Benefits of React Hooks

React Hooks make components easier to read and maintain by reducing the amount of code needed to manage state in components. They also make it easier to reuse code across different components.

Hooks also allow you to use state and other React features without writing a class, which makes it easier to share logic between components. This makes applications more efficient and easier to maintain.

## Rules of using Hooks :

React Hooks might just be awesome to use and its natural after learning them you would like to try them but wait then you need to know some rules without knowing you might just end up getting some errors

- **Only Call Hooks from React Functions that serve as react components or create your own custom Hook as we did in createContext and useContext**
- **Only Call Hooks at the Top Level  i.e. Don’t call Hooks inside loops, conditions, or nested functions**

## Conclusion

React Hooks are a powerful new feature in React that makes it easier to share stateful logic between components and simplify the code needed to manage state in components. They make it easier to read and maintain code, and make it easier to share logic between components.
