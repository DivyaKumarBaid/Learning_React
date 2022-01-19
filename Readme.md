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

### Using class instead of function

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
