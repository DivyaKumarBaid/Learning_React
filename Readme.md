# For Understanding React

React is a Javascript Library used for creating websites. React is managed by facebook developers and is a declarative framework which means you dont need to say to react what to do step by step.
React uses JSX to create html elements . JSX being Java Script XML which basically wraps html elements inside itself.

import React from 'react' -> so that you can use JSX (angular brackets)

import ReactDOM from 'react-dom' -> So that you can use reactDOM to render (ReactDOM.render(HTML,document.getElementbyId("ID")))

We use ReactDOM to render as it can convert JSX to html JS html element and can append it to the div given as parameter

### FAQ

1. What is a React component?
   A function that returns React elements. (UI)

2. What's wrong with this code?

```JavaScript
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

In react we have to have the function name starting with capital letter (Camel Case)

3. What's wrong with this code?

```JavaScript
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

In order to use the function the right way to call it inside a reactDOM render is using tags just like this

```JavaScript
ReactDOM.render(<Header />, document.getElementById("root"))
```

# Getting started with React

- To get started first download and install node from here https://nodejs.org/en/download/

- If we want to make a react app from scratch it would require to create many conplex steps thus for our ease , facebook has developed a tool called _create react app_ so for beginners we would use it.

_npx is new which comes with npm 5.2+ and it is a node package manager_

## Create React App

- It is the best way for beginners for creating a single page app

- Commands for getting started

  ```bash
  npx create-react-app <-name->
  cd <-name->
  npm start
  ```

  This basically downloads and sets up the create react app and start the npm host to host the app on localhost in my case on port 3000

## Basics of what happens in the background and what means what

- <-name->/src folder is where the main thing happens

- Entry point for react app is index.js inside the src folder

- The index.js imports

  ```JavaScript
  import React from 'react';
  import ReactDOM from 'react-dom';
  ```

  as these two are very critical lib.

  - react is the engine that sees how the DOM works and builds

  - react-dom is related to web which is document object model , it looks after the UI

  - There are different react libs such as:

    - react-native for android

    the index.js file has

    ```JavaScript
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
        );
    ```

    here ReactDOM lib renders anything thats inside React.StrictMode and strictmode essentially eliminates the ones uptodate react doesnt support

    And where to render it ?
    Inside 'root' , by finding something with the elementid 'root'

    Now where is 'root' element
    -> this is inside the body as a div in index.html in the public folder

- Inside the package.json in src folder we have a subsection as scripts

  ```JSON
      "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
      }
  ```

  _starts_ -> just takes our app and hosts it on local host without optimising it.

  _build_ -> it optimises the code - ready for production view point - making it faster for rendering on internet.

  _test_ -> this runs App.text.js to test if everything on App.js.

  _eject_ -> changes babble and webpack config to optimise the code

- App.js contains the react app

  - using import we import files such as css

- In index.js the reactDOM rendors the fucntion as <APP/> in which it searches for the function APP in App.js

- Component is self contained representation of html , css and js and react renders components

# Using Functions to build components

```JavaScript
  function Myapp(){
    return(
      <div>
        <p>My app</p>
      </div>
    )
  }

ReactDOM.render(<Myapp/>,document.getElementbyId("root"))
```

# ReUsing and Building Components

Components in react are essentially like small lego pieces which can join together to build a bigger piece.
To maintain and use components systematically we can create multiple JS files, save them in component folder and export functions and then import them in our index.js

```JavaScript
import React from "react"

export default function Header(){
  return(
    <div></div>
  )
}
```

and then import the above file with its name

```JavaScript
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"

ReactDOM.render(<Header/>,document.getbyElementId("root"))

```

## Props or Properties in react

To use a component multiple times we call a function with parameters.
eg

```JavaScript
export default function MyName(props){
  return(
    <h1>My name is {props.name}</h1>
  )
}
```

Here in the above example we are using props as parameter it is bascially a JS object (just like dict in python) that holds key values of parameters we pass to this function.
_* Whatever is inside the {} is JS *_

```JavaScript
ReactDOM.render(<Myname name = "Divya Kumar Baid"/>)
```

And we call the function just like the above with props as custom attributes

We can also Destructure the props like

```Javascript
export default function MyName({name})......
```

### FAQ on props

1. What do props help us accomplish?
   Make a component more reusable.

2. How do you pass a prop into a component?

   ```JavaScript
   <MyAwesomeHeader title="???" />
   ```

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No, because the JSX we use to describe native DOM elements will
   be turned into REAL DOM elements by React. And real DOM elements
   only have the properties/attributes specified in the HTML specification.
   (Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
   function Navbar(props) {
   console.log(props.blahblahblah)
   return (
   <header>
   ...
   </header>
   )
   }

5. What data type is `props` when the component receives it?
   An object!

### Using array.map

For every element in an array , array.map calls a function and concatenate the return value as an array
eg

```JavaScript
const arr1 = [1,2,3];
const arr2 = arr1.map((num) => {return (num*num)})
const arr3 = arr1.map(num => num*num )
const arr4 = arr1.map(function(num) {return num*num})
// In all the above array map function returns the same value in arr2 arr3 we are using
// arrow method and in arr4 we are using generic function
```

### Using array.map to render components

eg DATA

```JavaScript
export default [
  {
    name:"A",
    roll:1
  },
  {
    name:"B",
    roll:2
  },
  {
    name:"C",
    roll:3
  }
]
```

Example return function

```JavaScript
export default function Heading({name,roll}){
  return(
        <div>
            <h1>{name}</h1>
            <h2>{roll}</h2>
        </div>
        )
}
```

Example react file

```JavaScript
  import Data from "Data"
  import Heading from "Heading"

  const arr = Data.map(<Heading name = {Data.name} roll = {Data.roll}/>)
  RenderDOM.render(arr,document.getElementId("root"));
```

## State or useState in react

```JavaScript
import React,{useState} from 'react'

const arr = useState("HI") //This gives arr = {"HI",f()//a func} an array
//we can also use useState as
React.useState("HI") //as useState is present in the react lib
```

The useState returns two values - the state and a function through which we can change the state

```JavaScript
  const [value,setValue] = React.useState("Yes")
  setValue("NO") //this changes the value from yes to no
```

Creating a counter using useState

```JavaScript
  export default App(){
    const [count,setCount] = React.useState(0)

    function increase(){
      setCount(oldValue => oldvalue+1) //It is best to use this kind of func
    }

    function decrease(){
      setCount(function(oldValue){return oldValue-1}) //to update the old value
    }

    return(
        <div className="counter">
          <button className="counter--minus" onClick = {decrease}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
          <button className="counter--plus" onClick = {increase}>+</button>
        </div>
    )

  }
```

### Updating an array

IN react useState we cannot update the main value directly so we need to create a copy of that instance and then change the state

```JS
setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
```

### Updating an object

```JS

const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
```

### FAQ

1. What is "conditional rendering"?
   When we want to only sometimes display something on the page
   based on a condition of some sort

2. When would you use &&?
   When you want to either display something or NOT display it

3. When would you use a ternary?
   When you need to decide which thing among 2 options to display

4. What if you need to decide between > 2 options on
   what to display?
   Use an `if...else if... else` conditional or a `switch` statement

## Form Handling

```JS
import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault() //prevents the form from resetting to default value
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}


```

## useEffects

### FAQ

1. What is a "side effect" in React? What are some examples?

- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data,
  render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

4. How would you explain what the "dependecies array" is?

- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function

Example using useEffects

```JS
import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
```

## Cleaning Up after using useEffect

useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:

```JS
import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

```

## useRef

This is a hook in react which is similar to useState but it does not re render any component. It stores the value event after a component is re rendered

for example
```JavaScript

const countingRenders = useRef(0)

useEffect(()=>{
  countingRenders.current = countingRenders.current +1;
})

```

the above example has countingRenders as a useRef const and it has a .current value that stores the value in useRef inside brackets (0) zero in this case. In this case useRef doesnt re-render the components and avoids infinite loops 

Another usecase of useRef is to reference a DOM element such as

```JSX
const inputref = useRef()

const focus = () =>{
  inputref.current.focus()
}

<input ref={inputref} value = {state} onChange={(e)=>setState(e.target.value)}>
<button onClick = {()=>focus}></button>
```

## useMemo
It is a react hook that memorises the last value of a variable/object and oon re render compares if there is any change , if there is then it re assigns it otherwise the old value stays without running any code that is inside the initialisation

example
```JSX
const hlowrld = React.useMemo(()=>{return function1},[var1]) //some slow function1

```
Syntax of useMemo
```JSX
React.useMemo(
  ()=>{} //function
  ,[] //dependencies array
)
```

## useContext - createContext

Context hook in react is a solution to massive prop drilling to children component
It can contain the most commonly used functions / variables / objects at global level i.e. anyone as a children of context provider can use its content. Just like inheritance the children can use the functions and variables

example is there in the folder useContentExample 

basic example
```JSX
const Theme = React.createContext()
const ThemeToggle = React.createContext()

const [currTheme,setTheme] = React.useState(false)
const toggletheme = ()=>{setTheme(prevTheme=>!prevTheme)}

<Theme.Provider value = {currTheme}>
  <ThemeToggle.Provider value={toggletheme}>
    <Component>
  </ThemeToggle.Provider>
</Theme.Provider>
```

## Using class instead of function

Basically in Create-react-app , the App.js has function App() but react also gives the programer the fexibility of using classes

for example

**Initially**

```JavaScript
  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

_but to use classes we need to import {components} from 'react'_

**After Using classes**

```JavaScript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
```

We use class in our react app as it gives us access to this.state , state for a component

eg.

```JavaScript
  class App extends Component{
    constructor(){
      super();

      this.state={
        string:"Hello"
      };
    }
    render(){
      return(
        <div className='App'>
          <p>{this.state.string}</p>
          <button onClick={()=>this.setState({string:'Hey'})}>
            change Text
          </button>
        </div>
    }
  }
```

- react is smart enough that it only renders that component that is changed by the user i.e it wont re-render any other content that hasnt been changed

```JavaScript
class App extends Component {
  constructor() {
    super();

    this.state = {
      mons: [
        {
          name: 'pain',
          id: 'you_shall_know_pain'
        },
        {
          name: 'Itachi',
          id: 'Mangekeyo_Sharinghan'
        },
        {
          name: 'Madara',
          id: 'This_world_is_full_of_pain'
        }
      ]
    };
  }
  render() {
    return (
      <div className='App'>
        <p>{this.state.mons.map(naming => (
          <h1 key={naming.id}>{naming.name}</h1>
        ))}</p>
      </div>
    );
  }
}
```

In the above example we have a list of names under the this.state which in rendered in the return statement in render function. Here the JSX does the job as it calls the this.state.mons.map(naimg=>.....) .This is a function of JSX which basically calls this.state for every element present in the this.state.mons i.e. for pain it is called then for itachi it is called etc. the .map function requires another => function as an argument/object and thus we can use that function_name to refer to each and every element of this.state.mons elements
