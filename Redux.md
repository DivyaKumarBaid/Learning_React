# Redux
Redux is a state management library inspired by flux(another statemanager by facebook).
This is a centralised store that stores State of ui elements of the app. Redux is based on Functional Programming.

- Log Rocket

Pros: 
- Predictable state change
- Centralised State
- Cache / preserve page state
- Easy debugging

Cons:
- Complexity is high
- Verbose -> Boiler Plate

### Lodash
```
npm i lodash 
```

```JS
import {compose,pipe} from 'lodash/fp';

// wrapInDiv,tolowercase,trim are three func
const res = wrapInDiv(toLowerCase(trim(input)));

const transform = pipe(trim,toLowerCase,wrapInDiv)

transform(input);

```

### Currying
It converts a function that requires n arguments to a function that requires 1 argument

eg-
```JS
function add(a,b){
  return a+b;
}

function add1(a){
  return function(b){
    return a+b;
  }
}
const adding = add1(5);
adding(1);
// or
add1(5)(1);

const add2 = a=> b => a+b;

```

### Installing Redux
```bash
npm i redux
```

### Three Core concepts of Redux
- Store -> Holds the state of the app.
- Action -> Describes what happened.
- Reducer -> Ties the store and actions together.

The whole state of the app is stored in a single object that is managed by the store.

To update state of the app we need to let Redux know about it thro an action.

Reducer = (prevState,action) => newState;

          ---->  JavaScript App  ---->
          ^                          |
          |                          V
    Redux Store                   Action
          ^                          |
          |                          V
          <----      Reducer     <----

### Inplementing Actions
The only way to interact with store.
They describe what happened.
```JS
  const BUY_CAKE="BUY_CAKE"

  // {
  //   type:BUY_CAKE,
  //   quantity:1
  // }

  function buyCake(){
      return   {
      type:BUY_CAKE,
      quantity:1
    }
  }
```

### Reducers
Specify how the app state changes in response to actions sent to the store.

Function that accepts state and actions as arguments, and returns the next state of the appliaction are reducers.

reducer=(prevState,action)=>newState;

```JS
  const BUY_CAKE="BUY_CAKE"

  function buyCake(){
      return   {
      type:BUY_CAKE,
      quantity:1
    }
  }

  const initialState={
    numofCakes:10,
  }

  const reducer = (state=initialState,action)=>{
    switch(action.type){
      case BUY_CAKE:return{
        ...state,
        numofCakes:state.numofCake-action.quantity
      }

      default:return state
    }
  }
```

### Redux Store
One Store for the entire application
- holds apps state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Register Listeners via subscribe(listener)
- Handles unregister of listeners 

```JS
import redux from 'redux'
const createStore = redux.createStore;

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
      ...state,
      numofCakes:state.numofCake-1
    }

    default:return state
  }
}

const store = createStore(reducer)
console.log('Initial State'.store.getState())
```

### bindActionCreators
```JS
const bindActionCreators = redux.bindActionCreators
const actions = bindActionCreators({orderCake,restockCake},store.dispatch)
// const actions = bindActionCreator({functions},store.dispatch)

actions.orderCake(1)
actions.restockCake(3)
```

### Redux ToolKit
Standard way to write redux logic.
we need
- react-redux -> official Redux UI binding Lib for react
