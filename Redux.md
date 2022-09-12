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

### Combine multiple reducers
since redux will take only one reduceras arguemtn in createStore, we can combine two seperate reducers using combineReducers from redux.combineReducers
```JS
    const rootReducer = combineReducer({
        cake:cakeReducer,
        iceCream:iceCreamReducer,
    });

    const store = createStore(rootReducer);
```

### Middleware
Middleware is used to extend the redux with custom functionality.
Provides a thirdParty extension point between dispatching an actions and the moment it reaches the reducer.
Use middleware for logging,crash reporting, performing async tasks.

eg -> logger for redux

```JS
import reduxLogger from 'redux-logger';
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware
const store = redux.createStore(reducer,applyMiddleware(logger));
const unsubscribe = store.subscribe(()=>{})
```

### Redux logger
`npm install redux-logger`

### Async Actions - Redux-thunk
Using Redux-thunk to define async creators and axios tp fetch data

**Install redux-thunk**
`npm i redux-thunk`

- Redux thunk is a middle ware that allows an action creator to return a funtion with async tasks such as fetching data

### Redux ToolKit
Standard modern way to write redux logic.
we need
- react-redux -> official Redux UI binding Lib for react

### Installing redux-toolkit
`npm i @reduxjs/toolkit`
file str for normal .js file
```
-> app
  -> store
-> features
  -> cake
  -> icecream
-> index.js
```
- app contains the store
- features contain the different feature to be

Redux-toolkit uses createSlice and underhood it uses immer so we can just operate on state directly.

Example is in folder `reduxTool`

In normal Redux we use createStore() but in redux-toolkit we use configure store.

Slice in redux tool kit divides the reducers and actions for a particular branch to different slices for example selling cake is a slice and selling icecream is another and we combine both the slices in store.js inside app folder

from the slice js we export Slice.reducer and Slice.actions

for eg 
```JS
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
```

Inside store.js we configureStore using configureStore from redux-toolkit and we pass an object haivg reducer as one key and for middleware we include another key middleware

apps -> store.js -> combines reducers
features -> slices -> exports reducer and actions
index.js -> uses store to perform actions to the reducers imported in store

### Middleware in redux toolkit
For example we are using logger
`npm i redux-logger`

Middleware is initialised in app/store.js

to include middleware in store we add another key inside const store as `middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat('newMiddleware')`

### Extra reducers
Extra reducers help one slice of reducers to take action when another slice actions are passed.
For example if we want to apply an offer of buy one cake get one iceCream free we would use extra reducers.
To include extra reducer we need to include it in the createSlice object

```js
const iceSlice = createSlice({
  name:'ice',
  initialState:initialState,
  reducers:{
    ordered:(state,actions)=>state.numofIce-=actions.payload
  },
  extraReducers:(builder)=>{
    builder.addCase(cakeActions.ordered,(state)=>state.numofIce--)
  }
})
```

### Async Thunk in Redux Toolkit
Redux tool kit allows the use of async functions using thunk. This acts as extra reducers having three kind of actions -> pending, fullfilled, rejected.

eg
```JS
const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const fetchUser = createAsyncThunk('user/fetchUser', ()=>{
  return axios.get('url')
  .then((response)=> response.data.map((user)=>user.id))
})

const initialState= {
  loading:true,
  users:[],
  error:''
}

const userSlice = createSlice({
  name:'user',
  initialState:initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchUser.pending,(state)=>{
      state.loading=true,
    }),
    builder.addCase(fetchUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.users=action.payload;
      state.error='';
    }),
    builder.addCase(fetchUser.rejected,(state,action)=>{
      state.loading=false;
      state.user=[];
      state.error=action.error.message;
    })
  }
})

module.exports = userSlice.reducer;
module.exports.fetchUser = fetchUser;

```
